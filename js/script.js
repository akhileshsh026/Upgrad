// print parameters using the ...rest parameters not psoobile with arguments[0]
let pk = (...arr) => {
  console.log(arr[0]);
};
pk(1,23);

// rest parameters mut be at the end of the funtion
let pk1 = (multiplier,...a) =>{      // let pk1 = (multiplier,...a,b) =>{ throws error
  for (let i = 0; i < a.length; i++) {
    a[i]*= multiplier;
  }
    console.log(a)
}

pk1(3,1,2,3,4,5);

// question solution
/* TODO: Define a function with identifier calculateSumAfterTax
This function calculates the sum of all the prices after applying given tax on each price. 
*/
function calculateSumAfterTax(...arr) {
  let result=0;   
  arr.map(function (item) {
         result += (item + (item*0.1));
     })
     return result;
}

// Printing the sum of all the prices - 10, 20, and 30 after tax of 10% (first argument) is applied on each of the prices (subsequent parameters)
console.log(calculateSumAfterTax(10, 20, 30));

// arguments vs rest parameter
let foo = (...arg) => {
  console.log(arg[0]);
}

foo(12,34,34,3,43,);

/* this gives error but solve by above code using rest parameter.
let foo1 = ()=> {
  console.log(arguments[0]);
}

foo1(12,34,34,3,43,);
*/