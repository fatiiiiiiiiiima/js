// how to make and consume promises..two methods
//treat promise as an object

const promiseOne= new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log('async done');
        resolve();


    },2000)



}
    
)
promiseOne.then(function(){
    console.log('promise one done');

})
// second method
 new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log('async done');
        resolve();


    },2000)



}
    
).then(function(){
    console.log('promise two done');
})

// lets make third promise..which actually tells us that if we are taking data from any source
//lets say from any object like its keys then we can pass it in the resolve call back function
//and itll return the value

const promiseThree= new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async done');
        resolve({
            name: '<NAME>',
            age: 25
        })
    
},2000)})

promiseThree.then(function(user){
    console.log(user);
})

// promise four..here we introduce one error,and learn that what if we want access to one of the keys of the object
//then well use then and another then and use error to see difference in this case
const promiseFour= new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error=false
        if(!error){
            console.log("no error");
            resolve({
                username:"fatima",
                age:"27"
            })
            
        }
        else {
            reject('error:somwthing wrong')
        }
    },2000)
    
})
promiseFour.then (function(user){
    console.log(user);
    return user.username
})
.then (function(username){
    console.log(username);

})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log('promise resolved or rejected');
})//this is just confirmation that the promies has been consumed..its default


//another syntax to gracefully handle the promise

const promiseFive= new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error=false
        if(!error){
            console.log("no error");
            resolve({
                username:"fatima",
                age:"27"
            })
            
        }
        else {
            reject('error:somwthing wrong')
        }
    },2000)
})

async function consumePromiseFive(){
    try{
    const response= await promiseFive
    console.log(response);}
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();

////fetch 

async function getAllUsers (){
  try { const response=  await fetch('https://jsonplaceholder.typicode.com/users')
  const data= await response.json()
  console.log(data);
    
  } catch (error) {
    console.log('error', error);
    
  }
}
getAllUsers()

//another syntax for fetch above 

   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => {
    return response.json()
    })
    .then(data => {
        console.log(data);
    })
   
  