var person = {
    firestName : "Akhilesh kumar",
    lastName : "Sahu",
    get : function() {
        console.log("outer : My name is "+ this.firestName + this.lastName);
        var print = function(role) {
            console.log("Inner : My name is "+ this.firestName + this.lastName + "& my role is " + role);
        }.bind(this,"Devloper") 
        print();
    }
}

person.get();