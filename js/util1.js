const sum = (...arr) => {
    return arr.reduce((accumulator,currentValue)=> { accumulator+currentValue});
};

const avg = (...arr) => {
    return sum(arr)/arr.length;
};


export {sum,avg}