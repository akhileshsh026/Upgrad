function createEmployeeID() {
    var prefix = "employee";
    var generateID = function() {
        for (var i = 0; i < 5; i++) {
            console.log(prefix + i);
        }
    }
    return generateID;
 }
 
 var print = createEmployeeID();
 console.log(print());

 /* 

This is an example of closures. The anonymoous function inside the variable generateID is defined inside the lexical scope of the function createEmployeeID(). 
The inner function represented by generateID gets to access all the resources of the outer function named createEmployeeID() and thus, the variable prefix is accessible inside the inner function. Thus, when the inner function is returned from the outer function, it still maintains the value of the prefix variable. Thus, this code prints the prefix value - employee suffixed by the loop’s iteration variable i’s value, thereby printing employee0 to employee4. Therefore, this option is the correct choice

*/