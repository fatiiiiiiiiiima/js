/////////////////////ARRAYS//////////////////

// const myArr = [0,1,2,3]// arrays in js can have different tyapes in one array like [0,"hero",a]
// console.log(myArr);
// const newArr = myArr.concat([4,5]);  // this will add the numbers to the end of the array
// console.log(newArr);
/////Array Methods///////
// myArr.push(6) //this will add the numbers to the end of the array...push has updated the array
// console.log(myArr);
//pop function eliminates value from end of array 

// myArr.unshift(7) //this will add the numbers to the beginning of the array
// console.log(myArr);
// myArr.shift(7) //
// console.log(myArr);//this eliminates the numbers from the beginning of the array

// console.log(myArr.includes(7));// this will find if 7 is in the array, returns boolean

// console.log(myArr.indexOf(7));// this will find the index of 7 in the array


// const newArr = myArr.join() //returns value in string
// console.log(newArr);

//slice and splice method imp interview qs///////////////////////

// console.log("A",myArr);
//  const myn1= myArr.slice(1,3)  //prints the one at index no 1 and 2 eliminates the 3, original array remains the same as shown in op
//  console.log("B",myn1);
//  const myn2= myArr.splice(1,3)
//  console.log("C",myn2);
//  console.log("D",myArr);//original array changed after splice



 /////push and concat difference also spread operator thats easy/////
 // push enters array or element in another array treating it as an element not an array..for combining two arrays
 // concat is preferred..eg if we add second array to array1 having 2 values push will treat 2nd added arra
 //in first array as the third value


 const marvel_heroes =['thor','ironman']
 const dc_heroes =[ 'spiderman', 'batman']
//  console.log(marvel_heroes.concat(dc_heroes));
//  console.log(marvel_heroes.push(dc_heroes));
//  marvel_heroes.push(dc_heroes);
//  console.log(marvel_heroes);

// const allHeros = [...marvel_heroes,...dc_heroes]
// console.log(allHeros);

// const oneArr= [1,2,3,[4,5,6],4,5,[8,9],6]
// const twoArr= oneArr.flat(Infinity)
// console.log(twoArr);

// //can ask from array///

// console.log(Array.isArray('fatima'));//asks array 
// console.log(Array.from('fatima'));
// console.log(Array.from({name : 'fatima'}));//this syntax is wrong interesting btw


let score1=100
let score2=200
let score3=400
console.log(Array.of(score1,score2,score3));









