require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin basket flock theory'; 
let testAccounts = [
"0x4adc1413f064756ec6c4e4823a259ff145369780ecd367f47e39e9a1a038a6a3",
"0x54070c348d5b257b3d8db5c7350738f9b23737ea704206d84e3d1789ff669d36",
"0x5402be76123d7dc8e8152f06a04587bed2fcfa3780803612f660b30e00f68e1a",
"0x8ef66d814498ff8b01bcf7a364c573c319a2dd1c345d333b550984f440090587",
"0x25949bd74634f4517429c1f008b3e0ad1c0492e6367e0e2165c8cf815fd2bb50",
"0xfbbe15e9d9095c8114a74384ace13c20cb9cad783bc1a1ee90621f111a9364af",
"0x0229af38f3b4580db5e50a3c7475a6c261b70f9dc161b75495cf2ec06faee36f",
"0x470c2e1082faca87b6c933a4fa306a84188a609a98cf250490ecdd859f15802d",
"0xb8de2945b72702102f6e08c5444f6a492caa93d36c1fd959ba48af6c82226620",
"0x23837cf77f61888d58019bb6aa55baf1a5aba03fa43f51edd96ef5b56f347b77"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


