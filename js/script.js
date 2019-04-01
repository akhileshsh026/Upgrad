var itemList = [];

itemsToBuy = {
    bread: {
        isAvailable : false,
        quantityToBuy : 2,
    },
    eggs : {
        isAvailable : true,
        quantityToBuy : 0
    },
    tomatoes: {
        isAvailable : false,
        quantityToBuy : 23
    }
}

for (var keys in itemsToBuy)
{
    if(itemsToBuy[keys]["isAvailable"] != false)
    {
        itemList.push(keys);
    }

}

console.log(itemList);