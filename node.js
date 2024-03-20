// const accountId = 1332
// let accountEmail = "fatima@gmail.com"
// var accountPassword = "123"
// accountCity = "lahore"
// //  accountId = 2 not allowed
//   console.log(accountId);
// console.table([accountEmail,accountId,accountCity,accountPassword]);

// data types in js 7 are primtive 
// number
// BigInt(scientific values),string
// Boolean
// null
// undefined, symbol(used for uniqueness),symbol always returns unique values for even repeated variables as well 
// eg let id= Symbol('123')
// let nameId = Symbol('345')
// console.log(nameId===id); it would give return  false
// /BigInt=12344515515156n 

//non primtive(reference type) data types

// arrays
// objects
// functions

// /inside curly braces are objects, their data types may vary 
// let myObject{
  // name: "fatima",
  // age: 23,
  // city: "lahore"}

  //  const function myFunction(){
  //   console.log("hello");
  //  }

 


// object is non primitive data type
// null is primitive
// null is an object data type
// /all non primtive have data type of function
// undefined is data type 

// data type conversions in js 

// let score="33abc"
// // console.log(score);
// let valueInNumber = Number(score);
// // console.log(typeof(valueInNumber))
// let someNumber=33
// let stringNumber = String(someNumber)
// console.log(typeof(stringNumber));
// console.log(stringNumber);

//********************************comparison of data types in js ****************
// avoid comparisons of different data types in one console 
// avoid:
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
// console.log(undefined=0);
// console.log(undefined>0);
// console.log(undefined>=0);

//********************************stack and heap memory in js  ****************
// heap memory used in non primitive data type , gives refernce value doesnt make a copy value  , while changing not coy value but original value changes instead 
// stack memory used in primitive data type, whenever value is chnaged original value remains Intact , only copy changes 

// let myYoutubeName = "brocode"
// let anotherName = myYoutubeName
// anotherName = "codewithcoffee"
//  console.log(anotherName);
//  console.log(myYoutubeName);
//  console.log(myYoutubeName===anotherName);
 
//  let userOne =  {
// email : "user@example.com",
// password:"123456"

//  }
//  let userTwo = userOne 
//  userTwo.email = "fatima@google.com"
//  console.log(userOne.email);
//  console.log(userTwo.email);

// ****************************string interpolation ( strings in js)****************************
const name = "fatima"
const RepoCount = 5 
console.log(`hello my name is ${name} and my repocount is ${RepoCount}`);
// another syntax can be used , in this doc  string is treated as an Object
const gameName = new String ("my game")
// console.log(gameName.charAt(3));
// console.log(gameName.length);
// console.log(gameName.toUpperCase);
// console.log(gameName.indexOf("a"));
// const newString = gameName.substring(0,4)
// console.log(newString);
// const anotherString = gameName.slice(-7,3)
// console.log(anotherString);
// negative values can be entered in slice method to get the characters from end of a string
// trim and replace concept in strings
const newString="      fatima   "
console.log(newString.trim());

const newString2="https://www.google.com"

console.log(newString2.replace("google","youtube"));
console.log(newString2.split(".")[0]);
console.log(newString2.includes("youtube"));


