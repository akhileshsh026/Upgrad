/*
let events = document.getElementById("demo");
if(events)
{
    events.addEventListener('click', 
    () =>{
       let a = prompt(`What is your name?`);
       alert(a); 
       });
}

// this code will works
window.onload = function () {

    document.getElementById('demo').addEventListener('click', 
    () => {
        let a = prompt(`What is your name?`);
        alert(a); 
    });
}

*/



let getName = (callback) => {
    let name;
    setTimeout(() => {
        name = "Akhilesh";
        callback(name);
       }, 2000);
       
}

let greet = (nameVal)=>{
   
        console.log(`heloo ${nameVal}`); 
    
}

getName(greet);

// TODO 1: Write a function to create an order ID in the DB. You can mock this functionality by using a setTimeout() method which, after 2 seconds, assigns a value 101 to the order ID.

// TODO 2: Write a callback function which prints the order ID to the console in this format: Order placed successfully with order ID = 101.

// TODO 3: Invoke first function while passing in the callback function.