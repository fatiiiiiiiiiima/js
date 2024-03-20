// const balance=100
// const myBalance=Number(balance)
// console.log(myBalance);
// console.log(myBalance.toString().length);
// // can convert num to string in this way and thus can apply string properties therefater
// console.log(myBalance.toFixed(2)); // returns a fixed number with 2 decimal places
// const hundreds=100000

// console.log(hundreds.toLocaleString("PKR")); //returns the value in pkr

// ****maths****************
// console.log(Math.abs(-4));
// console.log(Math.ceil(3.7));// gives rounded value
//  console.log(Math.floor(3.7)); //gives low value qithout rounding off
// console.log(Math.round(3.5));//rounds off

// console.log(Math.max(1,2,3,4,5));

// console.log(Math.min(1,2,3,4,5));

// console.log(Math.random());// generates random no  everytime..and everytimes gives different number from 0 to 1 
// console.log(Math.random()*10) + 1 //random no multiplied by 10 so that value shifts before point eg if random no thats generated is 0.01then 10 would help it shift before point
// //and +1 is added so that atleast we get one as answer in case random value generated is 0 ;
// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// this is done in case random value generated is less than min..eg less than min multiply it by difference of them and add 1 so that diiference doesnt come 0
// and adding min so that atleast we get min as answer in case random value generated is less than min

//**********date object****************//
// let myDate = new Date()
// console.log(myDate); //date is an object 
// console.log(myDate.getDay()); // it will return day of week from 0-6 where 
//console.log(myDate.toString());
//  console.log(myDate.toDateString()); //it will give date 
//  console.log(myDate.toLocaleDateString());
//  console.log(myDate.toLocaleString()); 
 //console.log(myDate.toJSON());

//  let myDate2 = new Date(2021, 0, 10)// in js 0 is considered january as array starts from 0, 01 is considered january 
//  console.log(myDate2.toLocaleString());
 //if i want specific date format like mm dd yy
//  let myDate2= new Date("2024-02-17")
//  console.log(myDate2.toLocaleString());


// time stamps in dates///// used in quizes,polls in js///////////////////////////
// let timeStamp = Date.now()
// console.log(timeStamp); //gives time in mili seconds but not specific to get specific time stamp
// console.log(myDate2.getTime()); //
//to get time in seconds it has to be divided by 1000 but answer comes in decimal, to remove decimal part use math.floor
// converting timestamps into readable form

// console.log(Math.floor(Date.now()/1000));
// console.log(Math.floor(timeStamp/1000));

//if i want specifically day or month from date use get day, get month etc
let newDate = new Date()
console.log(newDate.getDay());

//locale string has some amazing customization properties like
// newDate.toLocaleString('default',{weekday:"short",month:"short",year:"short})





