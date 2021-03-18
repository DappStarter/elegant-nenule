require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grace glimpse flush security trap birth ridge punch install glimpse equal genuine'; 
let testAccounts = [
"0x0393f73e279c54013fd8e1ccde770a499e8217a97c82e622926da47e848f2bee",
"0x7321f0f16a3cb7d3ba450b5d1cc5bd1e41e54d34bc12dd8d113ef43cb048e189",
"0x6a39c5664e546dbe51edd911fe0c3f84dab86648c8e003bc03e11a0b08387f62",
"0x7c4baf0f397c92f666ddc8e12cf5c7572455ae6e43137fe7639268d39416d427",
"0xb72b797e5c8911a9584ba027ee24c31f2b2c91394a491d3273903f504afa35b6",
"0xe3e8e958758cd7cdc5dbf6ed5d23b7561204c84c1a2eb5c3671dcf529ab8da05",
"0xa6733215037984a32f452c30911f1680651480fca728f684896c182c1893d85c",
"0xd0bafdb726f1867d39d9ddb3163ef03cd9b9ce94454e35e5da919723ddccf11e",
"0xb2c3cb430500d0a832f80cbffb2d0793143720a3e21d3026fed3a1a9bdc4db29",
"0x6d845ff77b9a405f8f225a487a58afdc00af6a1b618b5d5e473606cc4fed26f7"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

