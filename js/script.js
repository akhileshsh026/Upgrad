var team = {
    participantOne: "Srishti",
    participantTwo: "Prateek",
    print: function () {
        /* TODO 1: 
        A. Define a function with identifier greetParticipants
        B. Pass the scope of the team object to greetParticipants function using bind() method
        C. The function greetParticipants must print the message to welcome both participants defined in the team object on the console, as shown in Problem Statement
        */
       var greetParticipants = function() {
           console.log("Welcome " + this.participantOne +" " + this.participantTwo);
       }.bind(this)
     greetParticipants();
    }
}

team.print();


var team = {
    participantOne: "Srishti",
    participantTwo: "Prateek",
    print: function () {
        /* TODO 2: 
        A. Define a function with identifier greetParticipants
        B. Pass the scope of the team object to greetParticipants function using call() method
        C. The function greetParticipants must print the message to welcome both participants defined in the team object on the console, as shown in Problem Statement
        */
       var greetParticipants = function() {
        console.log("Welcome " + this.participantOne +" " + this.participantTwo);
       }.call(this)
    }
}

team.print();


var team = {
    participants: ["Srishti", "Prateek"],
    print: function () {
        /* TODO 3: 
        A. Define a function with identifier greetParticipants
        B. Pass the scope of the team object to greetParticipants function using apply() method
        C. The function greetParticipants must print the message to welcome both participants defined in the team object on the console, as shown in Problem Statement
        */
       var greetParticipants = function() {
        console.log("Welcome " + this.participantOne +" " + this.participantTwo);
       }.apply(this,team.participants);
    }
};

team.print();