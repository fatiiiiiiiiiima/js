// whenever object made through literal isnot singleton
//declaration of object
Object.create // this is declaration through constructor and has singleton

const mySym = Symbol('key1')
 const jsUser ={ //this is declaration of object through literal
    name: "fatima", // keys of object
    age: 23,
    city: "lahore",
    email: "<EMAIL>",
    [mySym]: "value1", //always use square brackets to access symbols
    password: "<PASSWORD>",
    isAdmin: true,
    isPremium: false,
    isVerified: false,
    isPremium: true,
    isVerified: true,

 
 }

 //what is the best practice to call objects
//  console.log(jsUser.name); //no not this one..although it is used ..better would be through next step
 // as this one doesnt really accesses strings correctly
//  console.log(jsUser["email"]);

 //how to access symbol through keys of objects? for that declare it first
//  console.log(jsUser[mySym]);

 //how to over write values of objects by 
//  jsUser.email= "fatima@gmail.com"

 //to freeze values of objects 
//  Object.freeze(jsUser)
//  console.log(jsUser.email);


//now to access objects using functions as variables eg

// jsUser.greeting = function(){
    // console.log("hello")
// }
// console.log(jsUser.greeting());
// jsUser.greetingtwo = function(){
    // console.log(`hello js user,${this.name}`);
// }
// console.log(jsUser.greetingtwo());


//////objects with constructor////
//two ways to declare objects via constructor one is 
// const tinderUser = new Object(); //this is one way and is called singleton

//another way is

const tinderUser= {} //here object is declared now we have to add keys to it

tinderUser.name = "fatima"

tinderUser.age = 23

tinderUser.city = "lahore"

// console.log(tinderUser);

//we can have objects within an object like nested objects and can access any of them 

const tinderUser2 = {
    name: "fatima",
    age: 23,
    city: "lahore",
    language :{
        name: "fatima",
        age: 23
    },
    profession :{
        fullid: "fatima",
        userid: 23
    }
}

// console.log(tinderUser2.language.profession); //see this afterwards its not working

//we can add objects or concatulate them as we did with arrays 
const Obj1= { 1:"2", 2:"3", 3:"4"}
const Obj2= { 4:"5", 5:"6", 6:"7", 7:"8"}
const Obj3={...Obj1,...Obj2}//both syntaxes are used

// const Obj3 = Object.assign( {},Obj1, Obj2)  //look ojec2 is stored in obj 1 and both are then stored in empty braces
// console.log(Obj3);

//we can add objects to an array 

const users =[
    {

    },{},{},
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));


//object de construct and array de construct

const course = {
    name: "javascript",
    author: "fatima"
}
// console.log(course.author);
//to de construct object
// const {author}= course
// console.log(author);
//another syntax
const{author: user}=course
console.log(user);







