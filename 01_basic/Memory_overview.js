// memory how work in javascript:
// in privious languages we have to manage memory like allocate and free
// 2 types of memory stack and heap
// where they used : stack--->(primitive), Heap --->(Non-primitive)
/// whatever the variable you have declared you got copy
/// whatever goes in heap you got refrence of orignal value what ever you change it will rreflet in orignal
/// lets take instance:
let name = "clearing";
let othername = "otherClear";
othername = "changing";
console.log(othername);
console.log(name);
