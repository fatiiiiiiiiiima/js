let randomNumber = parseInt(Math.random()*100 +1 )
const userInput= document.querySelector('#guessfield')
const submit= document.querySelector('#sbt')
const guessSlot=document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrhi = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')
const p= document.createElement('p')
const prevguesses=[]
 const numGuess=1 
 playGame=true

 if (playGame) {
    submit.addEventListener('click',function (e) {
        e.preventDefault()
        const guess = (parseInt(userInput.value))
        validateGuess(guess)
        // checkGuess()
        
    } )
    
 }




 function validateGuess(guess) {
    
    if ((isNaN(guess) || guess<0) || guess>100) {
        alert('Please enter a valid guess between 0 and 100!')
        
    }
    else{
        prevguesses.push(guess);
        if (numGuess===11) {
            displayGuess(guess)
            displayMessage(`gameOver. random number was ${randomNumber}`)
        endGame();}
            else{
                checkGuess(guess)
                displayGuess(guess)
                

            }
            
        
    }
 }

 function checkGuess(guess) {
    if(guess===randomNumber){
        displayMessage(`you guessed it right`)
        endGame();
    }
   else if (guess<randomNumber) {
        displayMessage(`guess is tooo loo`)
        
    }
    else if (guess>randomNumber) {displayMessage(`your guess is too high`)
        
    }
    
 }

 function displayGuess(guess){
    userInput=''
    guessSlot.innerHTML +=`${guess, ''}`
    numGuess++
    remaining.innerHTML=`${11-numGuess}`





 }

 function displayMessage(message) {
lowOrhi.innerHTML=`<h2>${message}</h2>` 

    
 }
 
 function endGame() {
    userInput.value=''
    playGame=false
    userInput.setAttribute('disabled', ' ' )
    p.classList.add('button')
    p.innerHTML='<h2 id=newGame>Start new game</h2>'
    startOver.appendChild(p)
    newGame()


    
 }
 function newGame() {
    const newGamebutton= document.querySelector('#newGame')
    newGame.addEventListener('click',function(e){
        e.preventDefault()
        const randomNumber=parseInt(Math.random()*100 +1 )
        playGame=true
        guessSlot.innerHTML=''
        userInput.removeAttribute('disabled')
        numGuess=1
        prevguesses=[]
        remaining.innerHTML=`${11-numGuess}`
    startOver.removeChild(p)
    })
  
    
 }