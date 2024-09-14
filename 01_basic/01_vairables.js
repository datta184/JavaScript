const accountId=12321; // cant changed 
let accountEmail="abc@gmail.com";
var accountPassword=4544;
accountEmail="nomail@gmail.com";

console.table([accountId,accountEmail,accountPassword])

/* Avoid using var in JavaScript due to its function-scoping, 
hoisting issues, and lack of block-level scoping. 
Use let for variables that can change and const for constants 
to ensure better code readability, safety, and predictability */


/* if we difine the vairable and its unassigned then its type is undefined */
let AccountBalance;
console.log(AccountBalance);
