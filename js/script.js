// Destructing of the arrays

const mobNo = [91,9424,357016];

// type 1
const [country,operator,susbscriber] = mobNo;

console.log(country);
console.log(operator);
console.log(susbscriber);
console.log("\n");

// type 2
const [country1,subs1] = mobNo;

console.log(country1);
console.log(subs1);
console.log("\n");

// type 3
const [country2, ,susbscriber2] = mobNo;

console.log(country2);
console.log(susbscriber2);
console.log("\n");


// Destructing of the Objects.

var customer  = {
  firstName : 'Akhilesh Kumar',
  lastName  : 'Sahu',
  MobileNo  : 7987373427,
  Address   : 'Mandla'
}


const {firstName ,lastName} = customer;

console.log(firstName,lastName);
console.log("\n");

// also you can use aliancing to use the words other than keys in object.

const {firstName:fn1,lastName:ln1} = customer;

console.log(fn1,ln1);
console.log("\n");