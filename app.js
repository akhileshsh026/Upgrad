const crypto = require('crypto');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

class Block
{
       constructor(index,transaction,timestamp,prevHash)
       {
        this.index = index;
        this.transaction = transaction ;
        this.timestamp = timestamp;
        this.hash = crypto.createHash('sha256').update(this.toString()).digest('hex');
        this.prevHash = prevHash ;
       };

       toString() {
           return JSON.stringify(this);
       }
}

let GenesisBlock = new Block(0,[],new Date().getTime(),"00000000000000000000000000000000");

let blockChain = [GenesisBlock];

for (let index = 1; index < 10 ; index++) {
    
    blockChain.push(new Block(index,[], new Date().getTime(),blockChain[index-1].hash));
}

//console.log(blockChain);
let key = ec.genKeyPair();


console.log(`Public Key points : [ ${key.getPublic().getX().toString() } , ${ key.getPublic().getY().toString()} ]`);
console.log(`Pulic Key : 04${key.getPublic().getX().toString('hex') + key.getPublic().getY().toString("hex")}`);
console.log(`Private Key : ${key.getPrivate('hex').toString()}`);