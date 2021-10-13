pragma solidity ^0.6.0;

import './IERC20.sol';

contract MyContract1 {

    uint age;
    bool foo;
    uint[] balances;
    mapping(address => uint) traderBalances;
    IERC20 token;

    constructor(address tokenAddress) public {
        token = IERC20(tokenAddress);
    }

    function interactWithToken(address recipient, uint amount) external {
        token.transfer(recipient, amount);
    }

    function readAge() external view returns(uint) {
        return age;
    }

    function setAge(uint _age) external {
        age = _age;
    }

    function readBalance(uint _i) external view returns(uint) {
        return balances[_i];
    }

    function addBalance(uint _newVal) external {
        balances.push(_newVal);
    }

    function readTraderBalances(address trader) external view returns(uint) {
        return traderBalances[trader];
    }

    function updateTraderBalances(address trader, uint newVal) external {
        traderBalances[trader] = newVal;
    }

    function addTraderBalances(address trader, uint newVal) external {
        traderBalances[trader] = newVal;
    }

    enum TraderStatus { Inactive, Active, Deleted }
    struct Trader {
        address traderAddress;
        uint balance;
        bool isActive;
        TraderStatus status;
    }
    mapping(address => Trader) traders;

    event NewTransfer(uint amount, address tokenTransfered);
}
