/*

var input = [23,45,678,90,33,21,780,670,498,7493,58940,6565,900,370,1299,1300];
var output = [];

// getting multiples of 10
input.filter(function(item){
        if(item%10==0)
           {
             output.push(item);
             // return output;
           }
});
console.log(output);
*/

/*

var input = [189.45, 12.89, 7.43, 167.98, 767.78, 23.89, 990.67, 289.7, 44.56, 97.65, 2345.87, 665.43, 7221.89, 58843.21];
var output = [];
//console.log(Math.floor(input[0]) - input[0]);

input.map(function(item){
    output.push(item*100); 
})

console.log(output);

*/

var input = [234, 567, 273, 456, 598, 635, 644, 718, 750, 753, 801];
var output =[];

output = input.reduce(function(x,y){
  return x+y;
})

console.log(output);