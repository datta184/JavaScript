const name = "hello";
const num = 50;
console.log(name+num);
//string interpolation : backticks

console.log(`saying ${name} and concatenating number ${num}`);

const gamename = new String("hello");
console.log(gamename[0]); // also you can see in browser console in key value pair

console.log(gamename.__proto__); 

console.log(gamename.length);
console.log("\nprinting length of string");
console.log(gamename.toUpperCase());
console.log("\nfinding position of character in string");
console.log(gamename.indexOf('h'));


// slicing of string 
console.log("\nslicing of string\n");
const newString = gamename.substring(0,2);
console.log("\nslicing of string from last negative");
console.log(newString.slice(-4,3)); // we cannot give negative value at start if given it will consider 0 index


// usiong trim
const ecom = " ama zo n"; // trim exclude only starting and ending spaces
const secondEcom = "   flipkart   "
console.log(ecom.trim());
console.log(secondEcom.trim());

// replace 
 const url = "https://google.com.%20.sundar"; // browser does nto support spaces it will convert it to %20 so here you can replacce space or whole url
 console.log(url.replace('%20','-'));

 //converting string into array
 console.log(url.split('.')); // split: two parameter seprator and limit 



