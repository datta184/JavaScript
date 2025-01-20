// primitive  ----> call by value: not given memory address 

// 7 types :
// string, number , boolean, null, undefined, symbol, big int

// symbol ----> to make unique

//---------------------------------------

// non-primitive : reference type ----> reference like array, object, function

const number1 =100;
const number2 =100.00;


const IsloggedIn = true;
const Outside = false;


let userEmail   
const id = Symbol('123');
const otherId = Symbol('123');


const AacountNumber = 452624242543556;

console.log(id===otherId);

const hero = ['hum','tum','aur','sub'];
console.log(hero)

// now object What is object ---> inside curly braces : write in ky value pair

let myObj={
    name:"dj",
    age : 22,

}

console.log(myObj);

//we cal treat a function like vairable in javascript

const myFunction = function(){
console.log("helo");
}
console.log(myFunction);
