// javacsript foundation is over
///////// CONTROL FLOW IN JS//////
//some universal falsy values
false, 0,-0,BigInt 0n, null, undefined,NaN,"" (empty String, even not having space in it)

//some universal truthy values
[],{}," ","false",'false',"0",function(){}


if(userEmail.length==0){
    console.log("array is empty");
}
//how to call array in an obj while using if
const myObj= {}


if(Object.keys(myObj).length===0){
    console.log("object is empty");
}

//nullish coelcing operator
 //if there comes value of null in a long program..it will bypass it and assign the other value

 const value1
 value1=null ?? 10
 console.log(value1); //output: 10; there may be a function istead of 10 in place of 10, any way to bypass null
 //this operator is for null and undefined

 // var1= null ?? 10 ?? 15 // it ll assign the first value coming afyter null


 //terniary operator
 condition? true :false

 const icePrice=100
icePrice>=80 ? console.log("less than 80"): console.log("more than 80");;


/// break and continue

////while loop
let myArray=['flash','batman']
let arr=0
while (arr<myArray.length) {console.log(`array is ${myArray[arr]}`);arr++};
    
/////////hIGH ORDER ARRAY LOOPS IMPORTANT///////

//FOR OF LOOPS 
// simple for (const iterator of object) {

//eg 
const array=[1,2,3]
for (const num of array) {
    console.log(array);
    
}
    
const greeting="hello world"
    for (const greet of greeting) {console.log(`char is ${greet}`);
        
    }


    ///maps

    //maps and objects have different ways of iteration 
    //maps can be iterated objects have separate procedures to do so 

    const map=new Map()
    map.set('IN','INDIA')
    map.set('US','USA')
    for (const [key,value] of map) {
        console.log( `${key}=${value}`);

        
    }

    ////objects for in loops

    // const myObject={

    //     "js":javascript
    //     "cpp": c++
    // }
  
    //      for (const key in myObject) {
    //         console.log(`${key}=${myObject}`);

                
    //         }
         //for in loops gives keys..for of loop gives values

        //  array keys
        // arrays can be used in loops by for each loop, u can call and operate a whole 
        // function in an array of for each loop
        //syntax is as

        // const coding=[ "java", "python","ruby"]
        // coding.forEach(function(val){
        //     console.log(val);
        //      })
        //val ll give value of array, we can also use arrow function in for each


        // coding.forEach( (val)=> {console.log(val);})
        //  function can also be called in for each as
        function printMe(val){
            console.log(val);
        }

        coding.forEach( (printMe)
         coding.forEach( ( item,index,arr){
             console.log(item,index,arr);
         })

         //objects in an array and for each loop for that

         const array=[
            {
                languageName: "javascript"
            },
            {
                languageName: "c++"
            }
         ]
        
         array.forEach(function(val){
             console.log(val.languageName);
         })
    //this way i can access any value of an object inside of an array via for each loop
    
 
  
