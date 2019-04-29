const sample = (username , password ,callback1) => {
    let ans  = prompt("press 1 for 1 args , 2 for 2 args , 3 for 3 args.");
     switch (ans) {
         case "1":
               let error = "Error single parameter.";
               callback1(error);
             break;
         case "2":
                callback1(null,username);
             break;
         case "3":
               callback1(null,username,password);
             break;
     
         default:
               console.log("Don't time pass");
             break;
     }
}

const callback1 = (error,username,password) => {
    if(error)
    {
        console.log(error);
    }
    if(username)
    {
        console.log(username);
    }
    if(password)
    {
        console.log(password);
    }
}


window.onload = ()=>{
  document.getElementById('demo').addEventListener('click',()=>
  {
      sample("Akhileshsh026","Akhilesh@123",callback1);
  })
};


