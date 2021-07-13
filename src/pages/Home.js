import React from 'react';
import Card from 'react-bootstrap/Card';
const {Blockchain, Block, Transaction} = require('../blockchain/blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const SHA256 = require('crypto-js/sha256');

export default function Home() {
  let blockChainInstance = new Blockchain();
  const key = ec.genKeyPair();

  blockChainInstance.difficulty = 1;
  blockChainInstance.createGenesisBlock();
  
  let newBlock = new Block('07/05/2018', 'Olivia', blockChainInstance.getLatestBlock().hash);
  //let firstTransaction = new Transaction('Olivia', 'Maddie', 10);
  //firstTransaction.signTransaction(newKeys);
  //blockChainInstance.addTransaction(firstTransaction);
  blockChainInstance.minePendingTransactions('Olivia');
  
  return (
    
    <>
     <h1>Blocks on the Blockchain</h1>
     <div>
     <div style={{padding: '25px 50px 75px 100px'}}>
     <Card style={{ width: '18rem' , backgroundColor: 'lightgrey'}}>
          <Card.Body>
            <Card.Title>{blockChainInstance.chain[0].transactions}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Genesis Block</Card.Subtitle>
                <Card.Text>
                  <div>Block Hash:</div>
                  {blockChainInstance.chain[0].hash}
                </Card.Text>
                <Card.Text>
                  <div>Previous Block hash:</div>
                  {blockChainInstance.chain[0].previousHash}
                </Card.Text>
                <Card.Text>
                  <div>Balance:</div>
                  {blockChainInstance.getBalanceOfAddress(key.getPublic('hex'))}
                </Card.Text>
          </Card.Body>
      </Card>
      </div>
      <div style={{padding: '0px 50px 75px 100px'}}>
      <Card style={{ width: '18rem' , backgroundColor: 'lightgrey'}}>
          <Card.Body>
            <Card.Title>{blockChainInstance.chain[1].nonce}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Next Block</Card.Subtitle>
                <Card.Text>
                  <div>Block Hash:</div>
                  {blockChainInstance.chain[1].hash}
                </Card.Text>
                <Card.Text>
                  <div>Previous Block hash:</div>
                  {blockChainInstance.chain[1].previousHash}
                </Card.Text>
                <Card.Text>
                  <div>Balance:</div>
                  {blockChainInstance.getBalanceOfAddress(key.getPublic('hex'))}
                </Card.Text>
          </Card.Body>
      </Card>
      </div>
      </div>
    </>

  );
};
