const fs = require('fs');

let data = "Hello node js i will cook you out in my brain.";
let options = {
    encoding : 'utf8',
    flag : 'w'
};

fs.writeFile('hello.txt',data,options,(err) => {
    if(err)
    {
        console.log('Error Occured');
    } else
    {
        console.log('Operation Completed Sucessfully');
    }
})