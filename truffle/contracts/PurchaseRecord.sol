// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Ownable.sol";

interface PurchaseRecordInterface {
    function addPurchase(address _address) external;
    function confirmDeposit(address _address) external;
    function sendItem(address _address) external;
    function cancelPurchase(address _address) external;
    function refund(address _address) external;
    function confirmPurchase(address _address) external;
}
// abstract contract PurchaseRecordInterface {
//     function addPurchase(address _address) virtual external;
//     function confirmDeposit(address _address) virtual external;
//     function sendItem(address _address) virtual external;
//     function cancelPurchase(address _address) virtual external;
//     function refund(address _address) virtual external;
//     function confirmPurchase(address _address) virtual external;
// }

contract PurchaseRecord is PurchaseRecordInterface, Ownable {
    
    /*
    * Events
    */
    
    enum State {Purchased, Paid, Sent, Complete, Cancelled, Refunded, End}
    
    struct Record {
        State state;
        uint256 when; 
        address by;
    }
    
    address public admin;
     
    mapping (address => mapping(uint => Record)) escrowToRecords;
    mapping (address => uint8) escrowToRecordNo;
    
    modifier onlyEscrow {
        require(exists(msg.sender));
        _;
    }
    
    constructor() {
        admin = msg.sender;
    }
    
    function exists(address addr) private view returns(bool){
        return escrowToRecordNo[addr] > 0;
    }
    
    function addRecord(address _address, State state, address _by) private {
        uint8 recordNo = escrowToRecordNo[_address];
        escrowToRecords[_address][recordNo] = Record(state, block.timestamp , _by);
        escrowToRecordNo[_address] = uint8(recordNo + 1);
    }
    
    function addPurchase(address _address) external {
        addRecord(_address, State.Purchased, msg.sender);
    }

    function confirmDeposit(address _address) external 
    onlyEscrow 
    {
        addRecord(_address, State.Paid, msg.sender);
    }
    
    function sendItem(address _address) external 
    onlyEscrow 
    {
        addRecord(_address, State.Sent, msg.sender);
    }
    
    function cancelPurchase(address _address) external 
    onlyEscrow 
    {
        addRecord(_address, State.Cancelled, msg.sender);
        addRecord(_address, State.End, address(this));
    }
    
    function refund(address _address) external 
    onlyEscrow 
    {
        addRecord(_address, State.Refunded, msg.sender);
        addRecord(_address, State.End, address(this));
    }
    
    function confirmPurchase(address _address) external 
    onlyEscrow 
    {
        addRecord(_address, State.Complete, msg.sender);
        addRecord(_address, State.End, address(this));
    }
    
    function getRecordNumber(address _address) public view 
    returns (uint8 numberOfRecords)
    {
        return escrowToRecordNo[_address];
    } 
    
    function getRecord(address _address, uint recordNo) public view 
    returns (
        State _state,
        uint256 _when,
        address _by
        ) 
    {
        _state = escrowToRecords[_address][recordNo].state;
        _when = escrowToRecords[_address][recordNo].when;
        _by = escrowToRecords[_address][recordNo].by;
    }
}