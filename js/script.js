//Map

const words = ["Kitkat", "Lollipop", "Marshmallow", "Noughat", "Oreo"];
var temp="";
words.map(function(item) {
  temp += (item+",");
})
console.log(temp.substring(0,40));

//Filter

words.filter(function(item) {
  if(item == "Oreo")
  console.log(item + "Item Found");
})

const a = [10, 20, 30];
a.filter(function(item) {
  if(item>=15)
  console.log(item);
})


function sums(a) {
   let sum=0;
   for (let i = 0; i < a.length; i++) {
      sum +=a[i]; 
   }
   console.log(sum);
}

sums(a);

//Reduce
const b = [10, 20, 30,40,50,60,70,80];
b.reduce(function(x,y){
  console.log(" X :"+ x," Y :"+ y);
  return y/x; // any operation u can do here x+y x*y 
})