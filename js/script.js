function createEmployeeID() {
    var prefix = "employee";
    return generateID();
 }
 
 var generateID = function() {
    for (var i = 0; i < 5; i++) {
        console.log(prefix + i);
    }
 }
 
 var print = createEmployeeID();

 /*
 
 The anonymous function contained in the variable generateID is not written inside the function createEmployeeID(). It is just called inside the function createEmployeeID(). The scope of both these functions are different. This is why, the variable prefix (declared inside the function named createEmployeeID) is not inside the scope of the function generateID. Thus, this option is the correct choice.

 */