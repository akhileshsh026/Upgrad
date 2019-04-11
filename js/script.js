/*
var title = "A Passage to India";
var author = "E.M. Forster";

var novel = {
   title: "Pride and Prejudice",
   author: "Jane Austen",
   get: function() {
       console.log("Title = " + this.title + ", Author = " + this.author);

       var print = function() {
           console.log("Title = " + this.title + ", Author = " + this.author);
       }
       print();
   }
}

novel.get();

*/


var laptop = {
    company: "Apple",
    model: "Macbook Air",
    os: "macOS",
    set: function (company, model, os) {
        var setCompany = function (company) {
            this.company = company;
        }.bind(this, company);
 
        var setModel = function (model) {
            this.model = model;
        }.call(this, model);
 
        var setOS = function (os) {
            this.os = os;
        }.apply(this, os);
    },
    get: function () {
        console.log("Company = " + this.company + "\nModel = " + this.model + "\nOS = " + this.os);
    }
 };
 
 laptop.set("Dell", "Inspiron", "Windows");
 laptop.get();