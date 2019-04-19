
/* REst parameter */

function add(...arr)
{
  let sum = 0;
  arr.forEach(element => sum+=element);
  console.log(sum);
};

add(1,2);
add(1,2,3);
add(1,2,3,4);
add(1,2,3,4,5);
add(1,2,3,4,5,6);
add(1,2,3,4,5,6,7);
