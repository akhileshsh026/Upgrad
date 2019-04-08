


function modifyItem() {
    var items = 0;
 
    return {
        add: function() {
            console.log("Added item to cart!");
            items++;
        },
 
        getCount: function() {
            return "Items in cart = " + items;
        }
    }
 }
 
 var item = modifyItem();
 
 item.add();
 console.log(item.getCount()); // prints 1
 
 item.add();
 item.add();
 console.log(item.getCount()); // prints 2