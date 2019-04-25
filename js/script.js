var beta = function() {
  console.log("Entered beta!");
  setTimeout(function () {
      console.log("Inside beta!");
  }, 2000);
  console.log("Exited beta!");
}

var alpha = function () {
  console.log("Entered alpha!");
  setTimeout(function() {
      beta();
  }, 2000);
  console.log("Exited alpha!");
}

alpha();
