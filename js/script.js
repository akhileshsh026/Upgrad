var x = prompt("Please Enter the number");
num = parseInt(x);
var sum= 0;

while(num>0)
{
   sum += (num%10);
   num = Math.floor(num/10);
}
console.log(sum);