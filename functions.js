///////functions/////=

function greeting(){//function name is greeting , () are parameters of function
    // console.log("hello");
}
//returns value of function
// greeting() //returns value and () indicates execution, values in () here are arguments, here fun cs called


// function addTwoNumbers (a,b){
    // console.log(a+b);
//     let result = a+b
//     return result 
// }
// addTwoNumbers(3,4)
//function can also be called as 
// const result = addTwoNumbers(3,4)// executing while not console loging it is not showing me result
// in order to see result i have to console
// console.log('result is', result);

// function logInUsername (username){
    // if(username===undefined){ ///if i write if(!username) that means username value is undefined
        // console.log("please enter a name");
    // }
    // return `${username} just signed in`


// }

// logInUsername("fatima")
// console.log(logInUsername("fatima"));

///////Functions with objects AND ARRAYS in js////
//passing rest operator in funstion
//while shopping when we add more than one items to shopping cart then functions operate as

// function addToCart(...item){
    //  console.log(...item);

    
// }
// addToCart(100,200,300)  if i write like this 

// function addToCart(var1,var2,...item){
    // console.log(var1,var2,...item);

   
// }
// addToCart(100,200,300,400)

//passing objects in funstion
const myObj = {
    user: 'fatima',
    age :23

}
function getMyObj(anyObj){
    // console.log(`my name is ${anyObj.user} and age is ${anyObj.age}`);
}
getMyObj(myObj);

//similarly we can pass array to a function

const myArray = [100,200,300,400]
function getMyArray(anyArray){
    console.log(anyArray);
    return myArray[1];
}
// getMyArray(myArray);

//////scope, hoisting in functions////

// lets talk about scope very basic concept of scope, if else , declaration outside scope n all that

function myBox(score){
    if(score<50){
        // console.log("your score is low");
        return;
    }
    else{
        // console.log("your score is high");

    }
    if(website=1){
    // console.log(website);}
let website="google";
//error, cant access website before initialization because of extent of scope
}
}
// myBox(100);

//two ways to declare and work with functions
//one

function myBall(){
    // console.log("my ball");
}
myBall()// in this type..i can call function above the function line 

//another
const mynum = function (myBag){
    // console.log(myBag);
}

mynum(5)// in this i cant call function above function line it gives error n says mynum isnt initialized
//like i cant do this 
// mynum(5)
//const mynum = function (myBag){
    // console.log(myBag);
// }

///////////// ARROW functions and THIS keyword//////////

//this 

//this can only operate inside a function not outside it, this can access value of object in which theres a
// function, eg below down theres function inside an object, this refers to the context of the relevant function


const newObj={
    name:"fatima",
    age:23,
    myFunction:function(){
        // console.log(this.name);
        // console.log(`this is my ${this.name}`);
        // console.log(this);
    }

}

newObj.myFunction();
// this()// cant function here 
newObj.name="sam"
newObj.myFunction();


function chai(){
    // console.log(this);///gives all detauls of browser and windows
}

chai()

//see this too

const bev=function chai (){
    let user1 = 1

    // console.log(this.user1);//gives undefined in answer as this doesnt function inside a function i mean u know how

    //it cant access values inside functions
}
bev()



/////arrow function/////


////explicit and implicit method
//arrow function syntax explicit

const myValue= (n1,n2) => {
  return n1+n2

}
console.log(myValue(3,4)) //whenever we use curly we have to return value w/o round brackets

//implicit

const myValue1= (n1,n2) => (n1+n2)
console.log(myValue1(3,4)) 

//when used in case of object wrap the obj in round brackets

const mytote =(t1,t2)=> ({user:"fati"})

console.log(mytote(3,2))



