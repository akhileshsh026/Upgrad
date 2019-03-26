// 1 1 2 3 5 8 13 21 34

var a=1; 
var b=1; 
var f=a+b; 
console.log(a+"\n"+b+"\n"+f);

for(var i=4;i<15;i++)
{
    if(i%2==0)
    {
      a=f;
      f=f+b;
      console.log(f);
    } else
    {
      b=f;
      f = f+a;
      console.log(f);
    }
}