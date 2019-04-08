                                            // Exmaples of Closures
// Example 3 ( Namespacing private functions )

var dwightSalary = ( function() {
    var salary = 60000;
    function changeBy(amount) {
        salary += amount;
    }
    return {
        raise : function() { 
            changeBy(5000); 
        },
        lower : function() {
            changeBy(-5000);
        },
        currentAmount : function() {
            return salary;
        }
    };
}) ();  // ?

console.log(dwightSalary.currentAmount());
dwightSalary.raise();
console.log(dwightSalary.currentAmount());
dwightSalary.lower();
dwightSalary.lower();
console.log(dwightSalary.currentAmount());

dwightSalary.changeBy(10000);


