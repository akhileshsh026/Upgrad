                                            // Exmaples of Closures

/* Example :1




function welcome(name)
{
    var greeting = "Welcome! " + name;
    var message = function() {
        console.log(greeting);
    }
    return message;
}
var sayHello = welcome("Akhilesh");

sayHello();

*/

// Example :2

function dwightJob(title)
{
    return function(prefix)
    {
        return prefix + ' ' + title ;
    };
}

var sales = dwightJob("sales");
var manager = dwightJob("manager");

console.log(sales("Nikhil"));
console.log(manager("Akhilesh Kumar Sahu"));




