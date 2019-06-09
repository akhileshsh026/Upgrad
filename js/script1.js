const pi = 3.14;


// ANother way of exporting becuase the exports points out to the module.exports.
const calculateArea = r => 2*pi*r;

const calculateCircumfrence = r => pi * r*r;

// also another way 

calculateSum  =  r => r+r;

calculateProduct = r=> r*r;

exports = {
    calculateSum :calculateSum ,
    calculateProduct : calculateProduct ,
    calculateArea :calculateArea,
    calculateCircumfrence : calculateCircumfrence
};

module.exports = exports;
