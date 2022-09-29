// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Ownable.sol";
import "./PurchaseRecord.sol";

// 거래에 해당하는 기능들이 들어있고 새로운 거래를 만드는 컨트랙트
contract EscrowFactory is Ownable{
    
    struct Item {
        uint32 itemId;
        uint32 price;
        address seller;
        uint256 registeredAt;
        uint256 deletedAt;
        bool available;
    }
    
    event NewEscrow(address indexed seller, address indexed buyer, uint itemId, uint purchaseId, address _address);
   
    address public admin;
    address public cashContractAddress; 
    address public purchaseRecordContractAddress;
   
    mapping (uint32 => Item) public items;
    Escrow[] public escrows;
    mapping (uint256 => Escrow) public purchaseIdToEscrow;
    
    // 어드민에 함수 호출한 사람 주소 넣기
    constructor() {
        admin = msg.sender;
    }
    // 
    function setPaymentMethod(address _address) public onlyOwner {
        cashContractAddress = _address;    
    }
    
    function setPurchaseRecordContract(address _address) public onlyOwner {
        purchaseRecordContractAddress = _address;
    }
    // 상품을 등록
    function registerItem(uint32 itemId, uint32 price) public returns(uint32, uint32, address, uint256){
        Item memory item = Item(itemId, price, msg.sender, block.timestamp, 0, true);
        items[itemId] = item;
        return (item.itemId,  item.price, item.seller, item.registeredAt);
    }
    // 상품을 구매
    function purchaseItem(uint32 itemId) public returns(uint256){
        Item memory item = items[itemId];
        require(item.seller != msg.sender, "Check buyer address");
        require(item.available == true, "Item not available");
        
        Escrow escrow = new Escrow(cashContractAddress, purchaseRecordContractAddress, itemId, item.seller, msg.sender, item.price);
        escrows.push(escrow);
        uint256 purchaseId = escrows.length;
        purchaseIdToEscrow[purchaseId] = escrow;
        
        emit NewEscrow(item.seller, msg.sender, itemId, purchaseId, address(escrow));
       
        return purchaseId;  
    }
    
    function deregisterItem(uint16 itemId) public returns(bool) {
        Item storage item = items[itemId];
        require(item.seller == msg.sender, "Only seller can delete item.");
        
        item.deletedAt = block.timestamp;
        item.available = false;
    
        return true;
    }
}

abstract contract CashInterface {
  function balanceOf(address _addr) virtual external view returns (uint256 balance);
  function transfer(address _to, uint256 _value) virtual external returns(bool success);
  function transferFrom(address _from, address _to, uint256 _value) virtual external returns(bool success);
  function approve(address _spender, uint256 _amount) virtual external returns (bool);
}



contract Escrow {
    
    enum State {Purchased, Paid, Sent, Complete, Cancelled}

    CashInterface public cashContract;
    address public purchaseRecordContractAddress;
    PurchaseRecordInterface public purchaseRecordContract;
    
    uint32 public itemId;
    address public seller;
    address public buyer;
    uint32 public price;
    State public state;
    uint public purchasedAt;
    uint private initialCash;
    uint public completeAt;
    
    modifier onlySeller {
        require(msg.sender == seller);
        _;
    }
    
     modifier onlyBuyer {
        require(msg.sender == buyer);
        _;
    }
    
    constructor(
        address _contractAddress, 
        address _purchaseRecordAddress,
        uint32 _itemId, 
        address _seller, 
        address _buyer, 
        uint32 _price) {
            
        cashContract = CashInterface(_contractAddress);
        purchaseRecordContractAddress = _purchaseRecordAddress;
        purchaseRecordContract = PurchaseRecordInterface(_purchaseRecordAddress);
        
        // require(cashContract.balanceOf(_buyer) >= _price + 20, "Insufficient Cash");
        
        itemId = _itemId;
        seller = _seller;
        buyer = _buyer;
        price = _price;
        purchasedAt = block.timestamp;
        initialCash = cashContract.balanceOf(address(this));
        
        purchaseRecordContract.addPurchase(address(this));
    }
    
    function checkDeposit() public returns(bool) {
        require(state == State.Purchased);
        uint paid = cashContract.balanceOf(address(this));
        require(paid >= price + 20, "Greater than or eqauls to 20 Cash necessary!");
        state = State.Paid;  
        purchaseRecordContract.confirmDeposit(address(this));
        return true;
    }
    
    function send() public onlySeller {
        require(state == State.Paid);
        state = State.Sent;
        purchaseRecordContract.sendItem(address(this));
    }
    
    function cancel() public {
        require(msg.sender == seller || msg.sender == buyer);
        require(state == State.Purchased || state == State.Paid);
        uint paid = cashContract.balanceOf(address(this));
        if( paid >= price + 20 ) {
            cashContract.transfer(buyer, paid);
            purchaseRecordContract.refund(address(this));
        } 
        state = State.Cancelled;
        purchaseRecordContract.cancelPurchase(address(this));
    }
    
    function confirm() public onlyBuyer returns (bool){
        require(state == State.Sent);
        uint paid = cashContract.balanceOf(address(this));
        cashContract.transfer(seller, price);
        cashContract.transfer(buyer, paid - price);
        state = State.Complete;
        completeAt = block.timestamp;
        purchaseRecordContract.confirmPurchase(address(this));
        return true;
    }
    
}