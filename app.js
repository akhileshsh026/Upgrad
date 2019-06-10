const fs = require('fs');

let data = "Those who understand binary or not .";
let options = {
    encoding : 'utf8',
    flag : 'a'
};

fs.writeFileSync('hello.txt',data,options);