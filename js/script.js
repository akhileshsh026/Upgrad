var person = {
    firestName : "Akhilesh kumar",
    lastName : "Sahu",
    get : function() {
        console.log("outer : My name is "+ this.firestName + this.lastName);
        var print = function(role,role2) {
            console.log("Inner : My name is "+ this.firestName + this.lastName + " My role 1 and role 2 are :" + role + ","+ role2);
        }.apply(this,["dev","devops"])
    }
}

person.get();