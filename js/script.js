
let add = (callback) => {
  let x = 2, y = 3;
  console.log("Sum :", x + y);
  callback();
}

function displayComplition() 
{
  console.log("Finished this operation!");
};

const subtract = (callback) => {
  let x = 2, y = 3;
  console.log("Difference :", x - y);
  callback();
}

add(displayComplition);
subtract(displayComplition);
