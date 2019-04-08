var generateID = function() {
         var prefix = "uid-" , count=0; 
         return  function create () {
                        count+=1;
                        return prefix+count;
                        }
};

var create = generateID();

console.log(create());
console.log(create());
console.log(create());