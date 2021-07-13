const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('b55c27be9ac10a25139cba69bb07e9791a63d631a7c91a840b6d22cb1e99c8cc');
const myWalletAddress = myKey.getPublic('hex');

let maddieCoin = new Blockchain();

const firstTransaction = new Transaction(myWalletAddress, 'public key goes here', 10);
firstTransaction.signTransaction(myKey);
maddieCoin.addTransaction(firstTransaction);

console.log('\nStarting the miner...');
maddieCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance for maddie is', maddieCoin.getBalanceOfAddress(myWalletAddress));
console.log('Is Blockchain Valid?',  maddieCoin.isChainValid() ? 'Yes' : 'No');

