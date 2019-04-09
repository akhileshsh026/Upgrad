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
        }.bind(this);
 
        var setOS = function (os) {
            this.os = os;
        }
 
        setCompany();
        setModel();
        setOS();
    },
    get: function() {
        console.log(this.company, this.model, this.os);
    }
 };
 
 laptop.set("Dell", "Inspiron", "Windows");
 laptop.get();