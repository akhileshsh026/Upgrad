var generateID = function() {
         var prefix = "uid-" , count=0; 
         return  function create () {
                        count+=1;
                        console.log(prefix+count);
                        }
};

var create = generateID();

console.log(create(),create(),create());