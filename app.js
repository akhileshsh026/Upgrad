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

// let key = ec.genKeyPair();


// console.log(`Public Key points : [ ${key.getPublic().getX().toString() } , ${ key.getPublic().getY().toString()} ]`);
// console.log(`Pulic Key : 04${key.getPublic().getX().toString('hex') + key.getPublic().getY().toString("hex")}`);
// console.log(`Private Key : ${key.getPrivate('hex').toString()}`);

// Digital Signature part

function stringToHex (tmp) {
    let str = '',
      i = 0,
      tmp_len = tmp.length,
      c;
  
    for (; i < tmp_len; i += 1) {
      c = tmp.charCodeAt(i);
      str += c.toString(16) + '';
    }
    return str;
  }
  
  let key = ec.genKeyPair();
  
  let msg = "The password is 3219";
  
  let msgHex = stringToHex(msg);
  
  console.log("Message hex : ", msgHex);
  
  let signature = key.sign(msgHex);
  
  console.log("Signature : ", signature);
  
  let publicKey = "04" + key.getPublic().getX().toString('hex') + key.getPublic().getY().toString('hex');
  
  let keyFromPublicKeyOnly = ec.keyFromPublic(publicKey, 'hex');
  
  console.log("Is it correct signature ? => ", keyFromPublicKeyOnly.verify(msgHex, signature));
  