const foo = (anotherFunction) => {
  console.log("Inside foo");
  anotherFunction();
}

const bar = () => {
  console.log("Inside bar");
}

foo(bar);