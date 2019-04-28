// TODO 1: Write a function to create an order ID in the DB. You can mock this functionality by using a setTimeout() method which, after 2 seconds, assigns a value 101 to the order ID.

function Order(PrintOrder) {
       let OrderId;
       setTimeout(() => {
           OrderId=101;
           PrintOrder(OrderId);
       }, 2000);    
}
// TODO 2: Write a callback function which prints the order ID to the console in this format: Order placed successfully with order ID = 101.
function PrintOrder(OrderIdValue) {
    console.log(`Order placed successfully with order ID = ${OrderIdValue}.`);
}
// TODO 3: Invoke first function while passing in the callback function.
Order(PrintOrder);