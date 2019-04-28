/*

 let add = (callback) => {
    let x=2,y=3;
    console.log(x+y);
    
 }

 add(function() { 
   console.log(`Finished this Operation.`);
  });


 const substract = (callback) => {
  let x=2,y=3;
  console.log(x-y);
   callback();
 }

 substract(function() {
   console.log(`Finished this opertaion.`);
 });


*/

let add = (callback) => {
  let x = 2, y = 3;
  console.log("Sum :", x + y);
  callback();
}

add(()=> {
  console.log("Finished this operation!");
});

const subtract = (callback) => {
  let x = 2, y = 3;
  console.log("Difference :", x - y);
  callback();
}

subtract(()=> {
  console.log("Finished this operation!");
});