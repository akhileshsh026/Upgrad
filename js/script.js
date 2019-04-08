// Confussing This Keywards example

/* example 1

var operation = {
    a: 1,
    b: 2,
   
    add: function() {
        this.a + this.b;
        console.log("a = " + this.a + ", b = " + this.b);
        var print = function() {
            console.log("a = " + this.a + ", b = " + this.b);
        }
 
        print();
    }
 }
 
 operation.add();

 */

 /* Example 2 this keyward context 

var person = {
    firstName: "Sakshi",
    get: function () {
        console.log("Outer: " + this.firstName);
        var print = function () {
            console.log("Inner: " + this.firstName);
        };
        print();
    }
 };

 person.get();

 */ 


/* Example 4

var title = "A Passage to India";
var author = "E.M. Forster";

var novel = {
   title: "Pride and Prejudice",
   author: "Jane Austen",
   print: function() {
       console.log(this.title);
       console.log(this.author);
   }
}

novel.print();

*/

var novel1 = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    get: function() {
        console.log("Title = " + this.title + ", Author = " + this.author);
    }
 }
 
 novel2 = {
    title: "A Passage to India",
    author: "E.M. Forster"
 }
 
 novel2.get = novel1.get;
 novel2.get();
 novel1.get();
