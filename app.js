const crypto = require('crypto');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Miniing of the Block

class Block
{
       constructor(index,transaction,prevHash,nonce)
       {
        this.index = index;
        this.transaction = transaction ;
        if(typeof timestamp === 'undefined')
        {
          this.timestamp = new Date().getTime();
        } else
        {
          this.timestamp = timestamp;
        }

        if(typeof nonce === 'undefined')
        {
          this.nonce = 0;
        } else
        {
          this.nonce = nonce;
        }

        this.hash = crypto.createHash('sha256').update(this.toString()).digest('hex');
        this.prevHash = prevHash ;
       };

       updateNonce() {
         this.nonce +=1;
         let updatedBlock = new Block(this.index,this.transaction,this.transaction,this.prevHash,this.nonce);
           this.hash = updatedBlock.hash;
       }

       toString() {
           return JSON.stringify(this);
       }
}

let GenesisBlock = new Block(0,[],new Date().getTime(),"this_is_hash_for_block_0", "this_is_prev_hash");

let blockChain = [GenesisBlock];

let newBlock = new Block(1,[],GenesisBlock.hash);

console.log(newBlock);

let difficulty = "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";

while (parseInt(newBlock.hash,16) > parseInt(difficulty,16)) {
   newBlock.updateNonce();
  }

  blockChain.push(newBlock);
  console.log(blockChain);
  
  console.log('Mined Block =>',newBlock);