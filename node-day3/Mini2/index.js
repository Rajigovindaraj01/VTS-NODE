const _ = require('lodash');
const origiArray = [1,2,3,4,5,6,7,8];
console.log('original array:',origiArray);


const chunked = _.chunk(origiArray,3)
console.log('chunked (Size 3):' , chunked);

const shuffled = _.shuffle(origiArray);
console.log('Shuffled:',shuffled);

console.log('original after operations (unchanged):',origiArray);