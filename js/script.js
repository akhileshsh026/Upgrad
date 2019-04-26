console.log("Genric function example");

function add(x,y)
{
  return x+y;
}

function multiply(x,y)
{
   return x*y;
}

function Genric_functions(x,y,operate)
{
    return operate(x,y);
}

console.log("using sigle call stamente to use functions : add");
console.log(Genric_functions(5,6,add));
console.log("using sigle call stamente to use functions : Multiply");
console.log(Genric_functions(5,6,multiply));


function Genric_functions1(x,y,operate)
{
  x +=y;
  y +=x;
  return operate(x,y,operate);
}

console.log("using sigle call stamente to use functions Custom opertaions : add");
console.log(Genric_functions1(5,6,add));
console.log("using sigle call stamente to use functions Custom opertaions : Multiply");
console.log(Genric_functions1(5,6,multiply));

