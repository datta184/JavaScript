// ***********************Numbers****************************
const score = 100;
//just observse the things
const acbal = new Number(73467);
console.log(acbal);

console.log("length of score after converted into string:",score.toString().length);

// pricision value

const othernum = 123.897;
console.log("\n","before using pricision");
console.log(othernum);
console.log("\n","after using pricision");
console.log(othernum.toPrecision(3));
console.log("local string : by default use US standard to get in india use 'en-IN' ")
const hun = 100000;
console.log(hun);
console.log("us number system",hun.toLocaleString());
console.log("Indian number system",hun.toLocaleString('en-IN'));

// ***********************Math****************************

console.log(Math); // math is object having may properties to know use it in browser console and tryout
console.log(Math.abs(-4)); // returing absolute value: try out round with ceil and floor

console.log(Math.random());// it always return value between 0 and 1

const min = 10;
const max =20;

console.log(Math.floor(Math.random() * (max-min+1) + min)+min) // generate number as minimun 10 and above


