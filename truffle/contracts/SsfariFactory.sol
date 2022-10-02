// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SsfariFactory {
  struct Item {
    uint item_No;
    string item_name;
    string oneline_description;
    uint32 item_price;
    string category;
    string thumbnail_picture;
    string detail_picture;
    string delivery_period;
    uint32 sales_unit;
    string item_origin;
    string detail_description;
    address seller_address;
  }

  // 아이템 event
  event NewItem(uint item_No, string item_name, string oneline_description, 
                        uint32 item_price, string category,
                        string thumbnail_picture, string detail_picture, 
                        string delivery_period, uint32 sales_unit, 
                        string item_origin, string detail_description, address seller_address);

  // 아이템 variable
  uint public itemPk;
  Item[] public items;

  // 아이템 map
  mapping(uint => Item) itemNoToItem;
  mapping(address => Item) sellerToItem;
  // mapping(address => Item) paidaddrToItem;
  // 구매계약 variable
  uint public PurchasePk;
  PurchaseContract[] public purchasecontracts;
  // 구매계약 map
  mapping(uint => PurchaseContract) purchaseNoToPurchaseContract;
  mapping(address => PurchaseContract) paidToPurchaseContract;
  



  // 함수 : 아이템 등록 
  function registerItem(string memory item_name, string memory oneline_description, 
                        uint32 item_price, string memory category,
                        string memory thumbnail_picture, string memory detail_picture, 
                        string memory delivery_period, uint32 sales_unit, 
                        string memory item_origin, string memory detail_description, address seller_address) public returns (uint){
    itemPk = items.length;
    Item memory item = Item(itemPk, item_name, oneline_description, 
                        item_price, category, thumbnail_picture,detail_picture, 
                        delivery_period ,sales_unit , item_origin,detail_description, seller_address);
    items.push(item);
    emit NewItem(itemPk, item_name, oneline_description, 
                  item_price, category,
                  thumbnail_picture, detail_picture, 
                  delivery_period, sales_unit, 
                  item_origin, detail_description, seller_address);
    itemNoToItem[itemPk]= item;
    sellerToItem[seller_address] = item;
    return itemPk;
  }
  // 함수 : 아이템 전체 조회
  function viewItems() public view returns (Item[] memory) {
    return items;
  }
    // 함수 : 아이템번호로 조회
  function viewItemByItemNo(uint _item_No) public view returns (Item memory) {
    return itemNoToItem[_item_No];
  }
  // 아이템 판매자주소로 조회
  function viewSellerToItem(address _seller_address) public view returns (Item memory) {
    return sellerToItem[_seller_address];
  }
  // 함수 : 아이템 수정(아이템번호 필요)
  // function editItem(uint item_No, string memory item_name, string memory oneline_description, 
  //                   uint32 item_price, string memory category,
  //                   string memory thumbnail_picture, string memory detail_picture, 
  //                   string memory delivery_period, uint32 sales_unit, 
  //                   string memory item_origin, string memory detail_description, address seller_address) public view returns (Item memory) {
  //   Item memory selectItem = items[item_No];
  //   selectItem.item_name = item_name;
  //   selectItem.oneline_description = oneline_description;
  //   selectItem.item_price = item_price;
  //   selectItem.category = category;
  //   selectItem.thumbnail_picture = thumbnail_picture;
  //   selectItem.detail_picture = detail_picture;
  //   selectItem.delivery_period = delivery_period;
  //   selectItem.sales_unit = sales_unit;
  //   selectItem.item_origin = item_origin;
  //   selectItem.detail_description = detail_description;

  //   items[item_No] = selectItem;
  //   sellerToItem[seller_address] = selectItem;
  //   return selectItem;
  // }

  // 함수 : 아이템 삭제 (전체 items의 length는 줄어들지 않음.)
  function deleteItem(uint _item_No) public {
    delete items[_item_No];
  }

  // 함수 : 구매자 대표 전용 > 아이템 구매(계약 생성)
  function purchaseItem(uint _item_No, address _purchase_address, string memory _shipping_address, uint32 _total_people, uint32 _paid_people, bool _completed) payable public returns (uint){
    PurchasePk = purchasecontracts.length;
    uint32 puchaseContractPrice = items[_item_No].item_price;
    uint _total_price = puchaseContractPrice * _total_people;
    PurchaseContract memory purchaseContract = PurchaseContract(PurchasePk, _item_No, _purchase_address, _shipping_address, _total_people,  _paid_people, _total_price, _completed);
    purchasecontracts.push(purchaseContract);
    
    // Item memory item = items[_item_No];
    purchaseNoToPurchaseContract[PurchasePk] = purchaseContract;
    return PurchasePk;
  }
  // 구조체 : 구매계약 / 추후 거래내역
  struct PurchaseContract {
    uint purchase_No;
    uint item_No;
    address purchase_address;
    string shipping_address;
    uint32 total_people;
    uint32 paid_people;
    uint total_price;
    bool completed;
  }

  // 함수 : 전체 구매계약조회
  function viewPurchaseContract() public view returns (PurchaseContract[] memory) {
    return purchasecontracts;
  }
  // 함수 : 구매번호로 구매계약조회
  function viewPurchaseContractByPurchaseNod(uint purchase_No) public view returns (PurchaseContract memory) {
    return purchaseNoToPurchaseContract[purchase_No];
  }
  // 함수 : 계약 가입 (대표자 제외 다수) from으로 정해진 금액 송금 해야함.
  function paidContract(uint _purchase_No) payable public returns (uint32) {
    
    PurchaseContract memory purchasContract = purchaseNoToPurchaseContract[_purchase_No];
    require(purchasContract.completed == false);
    purchasContract.paid_people = purchasContract.paid_people + 1;
    return purchasContract.paid_people;
  }
  // 함수 : 계약 확정 (대표자가 확정) => (셀러에게 돈보냄) 
  function confirmContract(uint _purchase_No) payable external returns (bool) {
    PurchaseContract memory purchasContract = purchaseNoToPurchaseContract[_purchase_No];
    require(purchasContract.paid_people == purchasContract.total_people);
    require(purchasContract.completed != false);
    purchasContract.completed = true;
    address selleradd = items[purchasContract.item_No].seller_address;
    uint sellerprice = purchasContract.total_price;    
    payable(selleradd).transfer(sellerprice);
    return true;
  }
  // 함수 : 주문 리스트 조회
  function viewOrderList() public view { }

  // 함수 : 거래내역 조회
  function transactionHistory() public view { }
}
