let score = "33abc";
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score); // converting string to number 
console.log(typeof(valueInNumber));
console.log(valueInNumber); // NaN

let state = true;
console.log(state);
/* Notes 
"33" --> 33
"33abd" -->Nan
true --> 1; false--> 0
"" ---> false
"DJ"--> true
*/

// converting number to string 
let num = 99;
let str = String(num)
console.log(typeof(num));
console.log(typeof(str));
console.log(str);