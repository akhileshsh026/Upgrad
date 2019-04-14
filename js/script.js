class Person {
    constructor() {
        console.log("I am a person.");
    }
 }
 
 class Employee extends Person {
    constructor() {
        console.log("I am an employee.");
        super();
    }
 }
 
 let p = new Person();
 let e = new Employee();

 /*
   Output 

I am a person.
I am an employee.
I am a person.

An instance of the Person class is created. Thus, the message “I am a person” is printed on the console when the constructor function is called during the instantiation process. 
Next, an instance of the Employee class is created. The Employee class inherits the Person class. Notice that in Employee class, you have defined your own constructor and you have called the parent class constructor using the super() function call. 
Also, notice that the super() function is called after the message “I am an employee” is printed on the console. Thus, first the statement “I am an employee” is printed on the console and then, the constructor of the parent class is called, thus printing the message “I am a person”. 
An important point to note is that in JavaScript, the child class should call the parent class constructor if at all you choose to define your own constructor in the child class. 
There is no rule as to where exactly you must call the super() function inside your constructor. It is just recommended that you call the super() function at the beginning 
so that all the inherited properties and methods are available to you throughout the code in the constructor. However, you can choose to call the super() function at any 
place inside the constructor and the parent class constructor will be called at the point where you call the super() function and this will not throw any error. 
Thus, this option is the correct choice.

*/