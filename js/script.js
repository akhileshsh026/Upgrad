// prototypal inheritance in ES5:

 var Animal =  {
       moves :true
 }

 var Rabbit = {
     eats : true
 }

 Rabbit.__proto__ = Animal;
 console.log(Rabbit.moves);

 //can be rewritten as follows using the classes in ES6 syntax:
 class Animal1 {
     constructor() {
         this.moves = true;
     }
 }

 class Rabbit1 extends Animal1 {
     constructor()
     {
         super();
         this.eats =true;
     }
 } 

 let rabbit1 = new Rabbit1();
 console.log(rabbit1.moves);

 