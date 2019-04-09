var person = {
    firestName : "Akhilesh kumar",
    lastName : "Sahu",
    get : function() {
        console.log("outer : My name is "+ this.firestName + this.lastName);
        var print = function() {
            console.log("Inner : My name is "+ this.firestName + this.lastName);
        }.bind(this) 
        print();
    }
}

person.get();