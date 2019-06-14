const crypto = require('crypto');

class block
{
       constructor(index,transaction,hash)
       {
           this.index = index;
           this.transaction = transaction ;
           this.timestamp = new Date().getTime();
           this.hash = crypto.createHash('sha256').update(this.toString()).digest('hex') ;
       };

       toString() {
           return JSON.stringify(this);
       }
}

let GenesisBlock = new block(0,[],new Date().getDate());

console.log(GenesisBlock);