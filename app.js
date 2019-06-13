class block
{
       constructor(index,transaction,hash)
       {
           this.index = index;
           this.transaction = transaction ;
           //this.timestamp = new Date().getTime();
           this.hash = hash ;
       };

       toString() {
           return JSON.stringify(this);
       }
}

let GenesisBlock = new block(0,[],"This is Hash.");

console.log(GenesisBlock.toString());