const foo = () => {
    console.log("alpha");
 }
 
 const bar = () => {
    console.log("beta");
 }
 
 exports = { // statement 1
    foo: foo,
    bar: bar
 };
 
 exports.foo = bar; // statement 2
 
 console.log(module.exports);
 console.log(exports);