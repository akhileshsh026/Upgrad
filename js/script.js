var shoppingList = ['Milk',2,'Bread',3,'Potato',12];
var temp;

for(var i=0;i<shoppingList.length;i++)
{
       
    if(i%2===0)
    {
        temp = (shoppingList[i] + "-");

    } else
    {
        temp += shoppingList[i];
        console.log(temp);
        temp=null;
    }
    
}