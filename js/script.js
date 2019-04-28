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

let name;

let getName = () => {
  name = "Akhilesh";
}

let greet = ()=>{
    console.log(`heloo ${name}`);
}

getName();
greet();