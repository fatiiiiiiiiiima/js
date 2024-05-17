// document.getElementById('river').onclick=function(){

// } this approach isnot recommended
// best approach is to

document.getElementById('river').addEventListener('click',function(e){
    // alert('river clicked')
    console.log(e);
},false)
//false is default
//attachEvent
//jquery-on
//study about all these events for interview timetsamp
//default prevented
//type,target,to element, source element, current,off set,screen,client values,position related
//alt key,ctrl key,shift key,keycode,

// EVENT PROPAGATION///////
// event bubbling and event capturing 

document.getElementById('images').addEventListener('click',function(e){
    // alert('river clicked')
    console.log("clicked inside the ul");
},false)

document.getElementById('river').addEventListener('click',function(e){
    // alert('river clicked')
    console.log("river clicked");
},false)///this will initiate event bubbling because river is inside ul,river clicked then ul clicked automatically afyterwards
//bubble pops from inside towards outside


//event capturing is from top to bottom,...if i make parameter true instead of false then first ul ll be clicked
//then river whenever i click river 
//false is always there as default whether we write it or not

document.getElementById('river').addEventListener('click',function(e){
    // alert('river clicked')
    console.log(e);
},true)

document.getElementById('images').addEventListener('click',function(e){
    // alert('river clicked')
    console.log("ul clicked");
},false)

// if i want event not to be bubbled or captured...i wana target that single event only
//in that case i write e.stop propagation

document.getElementById('river').addEventListener('click',function(e){
    // alert('river clicked')
    console.log(e);
    e.stopPropagation()
},false)
//theres prevent default as well

document.getElementById('river').addEventListener('click',function(e){
    // alert('river clicked')
    console.log(e);
    e.preventDefault()
},false)



//if i want to remove on of those images ...for that i would be targeting parent node of that image
//and then apply remove function

document.getElementById('river').addEventListener('click',function(e){
    // alert('river clicked')
    console.log(e.target.parentNode);
    let removeIt= e.target.parentNode
    removeIt.remove()
    // removeIt.parentNode.removeChild(removeIt)
},false)
//this removes that image but the problem is that it can remove whole ul whenever clicked somewhere else
//in order to remove targeted image 

document.getElementById('river').addEventListener('click',function(e){
    // alert('river clicked')
    console.log(e.target.tagName);
    if (e.target.tagName==='IMG') {
        let removeIt= e.target.parentNode
    removeIt.remove()

        
    }
},false)