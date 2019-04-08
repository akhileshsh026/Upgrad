                                            // Exmaples of Closures

// Example :1




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





