const buttons = document.querySelectorAll('.1button')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log(e.target);
        if (e.target.id=== "grey") {
            body.style.backgroundColor = "grey";
            
            
        }
        if (e.target.id=== "red") {
            body.style.backgroundColor = "red";
            
            
        }
        if (e.target.id=== "green") {
            body.style.backgroundColor = "green";
            
            
        }
        if (e.target.id=== "blue") {
            body.style.backgroundColor = "blue";
            
            
        }
    })
    
})