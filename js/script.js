var Item = [];
var itemsInCart = Item.length;



function addItem()
{
    Item.push("Item1");
    console.log("Item added to cart!");
    itemsInCart+= 1;
    console.log("Items in cart = "+ itemsInCart);
}

function removeItem()
{
    Item.pop();
    console.log("Item removed from cart!");
    itemsInCart-=1;
    console.log("Items in cart = "+ itemsInCart);
}

console.log("Initially: Items in cart = " + itemsInCart);
addItem();
addItem();
removeItem();