var x= prompt("Please enter the Number");   x= parseInt(x);
var result=0 ,sum = 0 , remainder =0; 

while (x!=0) 
{
   remainder = parseInt(x) % 10; 
   sum = sum + remainder ;
   x = parseInt(x)/10;
}

console.log(sum);