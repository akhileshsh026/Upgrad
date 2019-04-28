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
*/
window.onload = function () {

    document.getElementById('demo').addEventListener('click', 
    () => {
        let a = prompt(`What is your name?`);
        alert(a); 
    });
}