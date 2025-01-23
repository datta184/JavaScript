//Dates
//JavaScript manages dates in a way similar to Java. Both languages share many identical date-related methods and represent dates as the count of milliseconds elapsed since midnight on January 1, 1970, UTC. A Unix Timestamp, on the other hand, measures the number of seconds passed since that exact moment. This moment, marking midnight on January 1, 1970, UTC, is referred to as the epoch.
let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(typeof(mydate));
console.log("----------------------------");
let mycreateddate = new Date(2025,0,21); // note: month start from o/p = 2025-01-21
console.log(mycreateddate);
console.log(mycreateddate.toDateString());
console.log("--------MM-DD-YYYY--------------------");
console.log(mycreateddate.toLocaleDateString());
console.log("--------Timestamp----------"); // used to make quiz , polls
let mytimestamp = Date.now();
console.log(mytimestamp);
console.log(mycreateddate.getTime());
console.log("--------converting in to Second----------");
console.log(Math.floor(Date.now()/1000));
console.log("-------- Tryout date month,day,year ----------");
let newDate =  new Date("2025,01,21");
console.log(newDate);
console.log("day:",newDate.getDay(),",","month:",newDate.getMonth());