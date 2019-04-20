// Template literals

let firstname = "Akhilesh Kumar";
let lastname = "Sahu";

console.log(`My Name is ${firstname} ${lastname}`);

// also without using the newline opeartor 

let like= "Google";

console.log(`my Name is ${firstname} ${lastname}
and i would like to ${like}`);

//Question 

/**
 * Function to print the order summary with the given customer and order details 
 */
const printOrderSummary = () => {
  // TODO: Rewrite the message given below using template literals (template strings)
  let message = `Hi ${customer.firstName} ${customer.lastName}! Your order for ${order.items.length} items has been successfully placed. Thank you!`;
  console.log(message);
}

// object consisting details of the customer
const customer = {
  firstName: "Srishti",
  lastName: "Gupta",
  gender: "female"
};

// object consisting details of the order
const order = {
  id: "SG101",
  amount: 950,
  items: ["Apparel", "Shoes", "Bag"]
}

printOrderSummary(customer, order);