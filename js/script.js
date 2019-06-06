function getUsername(validateUsername1) {
  console.log(`Getting username...`);
  setTimeout(() => {
      let username="";
      username = "srishti";
      console.log(`Username = ${username}`);
      validateUsername1(username);
  }, 3000);
}
/*
TODO 2: 
A. Define a function with identifier validateUsername
B. Inside this function, print the message "Validating username..." to the console
C. Validate the username passed to this function as the argument
(A username is VALID when it is not undefined and null and an empty string)
D. If the username is valid, print the message "Valid Username!" on the console and call the callback function passed in the argument
E. If the username is not valid, print the message "Invalid Username! Please try again!"
*/
function validateUsername(params,callback) {
   console.log(`Validating username...`);
   if(params=='srishti')
   {
      console.log(`Valid Username!`);
      callback();
   } else
   {
      console.log(`Invalid Username! Please try again!`);     
   } 
}

/*

TODO 3: 
A. Define a function with identifier getPassword
B. Inside this function, print the message "Getting password..." to the console
C. Write a setTimeout() function with a delay of 3 seconds to mock getting the password from user
(you need to assign value 'upgrad' to the password inside the setTimeout() function)
D. Print the password to the console, as shown in the Problem Statement
E. Call the callback function validatePassword() while passing in the password as the argument to it

*/

function getPassword(validatePassword1) {
  console.log(`Getting password...`);
  setTimeout(() => {
      let password="" ;
      password = 'upgrad';
      console.log(`Password = ${password}`);
      validatePassword1(password);
  }, 3000);
}

/*
TODO 4: 
A. Define a function with identifier validatePassword
B. Inside this function, print the message "Validating password..." to the console
C. Validate the password passed to this function as the argument
(A password is VALID when it is not undefined and null and an empty string)
D. If the password is valid, print the message "Valid Password!" on the console and call the callback function passed in the argument
E. If the password is not valid, print the message "Invalid Password! Please try again!"
*/

function validatePassword(params,callback) {
  console.log(`Validating password...`);
  if(params==='upgrad') 
  {
      console.log('Valid Password!');
      callback(); 
   } else
   {
      console.log("Invalid Password! Please try again!");
   }

}

/*
TODO 5: Define a function with identifier done which logs the message "BOTH VALID" on the console
*/
function done() {
  console.log(`BOTH VALID!`);
}

/*
TODO 6: 
A. Define a function with identifier login
B. Inside the login() function, call the getUsername() function
C. Pass validateUsername() function with username argument as the callback function inside the getUsername() function
D. Pass getPassword() function as the callback function inside the validateUsername() function
E. Pass the validatePassword() function with password argument as the callback function inside the getPassword() function
F. Pass the done() function as the callback function inside the validatePassword() function
*/

const login = () => {
  getUsername((username) => {
    validateUsername(username ,() =>{
      getPassword((password)=>{
        validatePassword(password,()=>{
          done();
        });
      });
    });
  });
}

login();

const login1 = () => {
  getUsername((username) => {
       validateUsername(username, () => {
           getPassword((password) => {
              validatePassword(password, () => {
                     done();
                   });
           });
      });
  });
  }
