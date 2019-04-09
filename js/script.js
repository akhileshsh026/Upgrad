var person = {
    firestName : "Akhilesh kumar",
    lastName : "Sahu",
    get : function() {
        console.log("outer : My name is "+ this.firestName + this.lastName);
        var print = () => {
            console.log("Inner : My name is "+ this.firestName + this.lastName );
        }
        print();
    }
}

person.get();