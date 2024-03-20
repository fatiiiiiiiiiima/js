const fruits =['banana', 'apple']
// f
// fruits.unshift('apple')
// console.log(fruits);

// const myArray=[ 1,3,5,7,8,9,11,15,17]
// const Arr = myArray.sort()
// console.log(myArray);

// const myArr=[1,2,3,4,newArr=[5,6,7]]
// newArr[1]=8
// console.log(myArr);
// console.log(newArr[1]);
// console.log(myArr[4]);
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// function greet(name) {
//     rl.question('enter your name',name)
//     console.log(`Hello ${name}`)
//     rl.close();

    
// }
// greet('fatima')

// function greet(name){
//     console.log('hallo',name);
// }

// let name1= prompt("enter the name value")
// greet(name1)


function area(area1){
    area=a*a
    return area 
    console.log(area);
}
rl.question('Enter length of one side ', (length)=>{
    a=Number(length)
    area(a)
})



let area1= prompt("enter area value to be calculated")
area(area1)


storing functions in variables

function area(area1){