const Web3 = require('web3');

const web3 = new Web3('https://mainnet.infura.io/v3/bbdc0428754a4c27b64e3025b4581121')

const abi = [{
    "inputs": [{"internalType": "uint256", "name": "chainId_", "type": "uint256"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "src", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "guy",
        "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "wad", "type": "uint256"}],
    "name": "Approval",
    "type": "event"
}, {
    "anonymous": true,
    "inputs": [{"indexed": true, "internalType": "bytes4", "name": "sig", "type": "bytes4"}, {
        "indexed": true,
        "internalType": "address",
        "name": "usr",
        "type": "address"
    }, {"indexed": true, "internalType": "bytes32", "name": "arg1", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "bytes32",
        "name": "arg2",
        "type": "bytes32"
    }, {"indexed": false, "internalType": "bytes", "name": "data", "type": "bytes"}],
    "name": "LogNote",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "src", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "dst",
        "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "wad", "type": "uint256"}],
    "name": "Transfer",
    "type": "event"
}, {
    "constant": true,
    "inputs": [],
    "name": "DOMAIN_SEPARATOR",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "PERMIT_TYPEHASH",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}, {
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "usr", "type": "address"}, {
        "internalType": "uint256",
        "name": "wad",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "usr", "type": "address"}, {
        "internalType": "uint256",
        "name": "wad",
        "type": "uint256"
    }],
    "name": "burn",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "guy", "type": "address"}],
    "name": "deny",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "usr", "type": "address"}, {
        "internalType": "uint256",
        "name": "wad",
        "type": "uint256"
    }],
    "name": "mint",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "src", "type": "address"}, {
        "internalType": "address",
        "name": "dst",
        "type": "address"
    }, {"internalType": "uint256", "name": "wad", "type": "uint256"}],
    "name": "move",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "nonces",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "holder", "type": "address"}, {
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }, {"internalType": "uint256", "name": "nonce", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "expiry",
        "type": "uint256"
    }, {"internalType": "bool", "name": "allowed", "type": "bool"}, {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
    }, {"internalType": "bytes32", "name": "r", "type": "bytes32"}, {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
    }],
    "name": "permit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "usr", "type": "address"}, {
        "internalType": "uint256",
        "name": "wad",
        "type": "uint256"
    }],
    "name": "pull",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "usr", "type": "address"}, {
        "internalType": "uint256",
        "name": "wad",
        "type": "uint256"
    }],
    "name": "push",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "guy", "type": "address"}],
    "name": "rely",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "dst", "type": "address"}, {
        "internalType": "uint256",
        "name": "wad",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"internalType": "address", "name": "src", "type": "address"}, {
        "internalType": "address",
        "name": "dst",
        "type": "address"
    }, {"internalType": "uint256", "name": "wad", "type": "uint256"}],
    "name": "transferFrom",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "version",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"internalType": "address", "name": "", "type": "address"}],
    "name": "wards",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}];
const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

const init = async () => {

    const contract = new web3.eth.Contract(abi, address);
    console.log(contract.options.address);

    const name = await contract.methods.name().call();
    console.log(name);

    const symbol = await contract.methods.symbol().call();
    console.log(symbol);

    const supply = await contract.methods.totalSupply().call();
    console.log(supply);


    // sender
    // public 0x198fD3B610E570e78c7B45C60Fc37bBac39d72a5
    // private 20f04a8002455e73d6d8323362bce8490a72973a185ac1d7f214435252206ed7

    // receiver
    // public 0x1ecE500c2E1D90702A9f627711C723A4D2caa353
    // private 52893eb4fafa14fb0366a5aba33fff87bd6cad247ad5965e7fd09c521cbae6a3

    web3.eth.accounts.wallet.add('20f04a8002455e73d6d8323362bce8490a72973a185ac1d7f214435252206ed7');

    const gas = await contract.methods.transfer('0x198fD3B610E570e78c7B45C60Fc37bBac39d72a5', 10).estimateGas();
    console.log(gas);

    const gasPrice = await web3.eth.getGasPrice();
    console.log(gasPrice);

    contract.methods.transfer('0x198fD3B610E570e78c7B45C60Fc37bBac39d72a5', 10).send({
        from: '0x198fD3B610E570e78c7B45C60Fc37bBac39d72a5',
        gas: gas,
        gasPrice: gasPrice
    });
}

init();