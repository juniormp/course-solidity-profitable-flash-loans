const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    rinkeby: {
      // smart contract
      // public  0x9c3063D7493b7E367dA73DE45930d23e693F03C2
      // private 00664515718a6d6f8f8e2c1afa6a7a77313bd407bb776c73a14862e4d213122a
      provider: () => new HDWalletProvider('00664515718a6d6f8f8e2c1afa6a7a77313bd407bb776c73a14862e4d213122a', 'https://rinkeby.infura.io/v3/bbdc0428754a4c27b64e3025b4581121', 0, 1),
      network_id: 4, //rinkeby
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
       version: "0.6.0",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
};
