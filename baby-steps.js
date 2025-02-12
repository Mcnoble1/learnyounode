const process = require('process');

let nums = process.argv.slice(2);
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += Number(nums[i]); 
}
console.log(sum);
