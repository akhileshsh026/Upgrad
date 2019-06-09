const pi = 3.14;

const calculateArea = r => 2*pi*r;

const calculateCircumfrence = r => pi * r*r;

module.exports.calculateArea = calculateArea ;

// other way to export

module.exports['calculateCircumfrence']= calculateCircumfrence;