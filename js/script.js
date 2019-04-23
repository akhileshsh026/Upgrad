console.log('1) Passing function as a context in bind method');

let printDetails = function(fname, lname, role) {
    console.log(fname + " " + lname + ". I am a " + role + ".");
}
var person3 = {
    firstName: "John",
    lastName: "Doe",
    get: function () {
        var print = function (fname, lname, role) {
           this(fname, lname, role);
        }.bind(printDetails, this.firstName, this.lastName, 'Tester');
        print();
    }
 };

 person3.get();


 console.log('2) Passing the Object as context.');
 var person2 = {
    details: {
        firstName: "Roshan",
        lastName: "Menon"
    },
    get: function () {
        var print = function (role) {
            console.log(this.firstName + " " + this.lastName + ". I am a " + role + ".");
        }.bind(this.details, "Developer");
        print();
    }
 };
 
 person2.get();