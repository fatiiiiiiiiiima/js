const rand_color=function(){
    const hex='0123456789ABCDEF'
    const color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;

}
let IdInterval
const StartChange= function(){
    if (!IdInterval) {
        IdInterval= setInterval( colorChange,1000);
        
    }
   
   

   function colorChange()
   { document.body.style.backgroundColor=rand_color();}

}
const stopChange= function(){
    clearInterval(IdInterval);
    IdInterval=null

}
document.querySelector('#start').addEventListener('click',StartChange)
document.querySelector('#stop').addEventListener('click',stopChange)
