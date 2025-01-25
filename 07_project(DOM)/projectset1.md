DOM Basic projects 

project 1 color changer

Html file 
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Chai aur code color changer</title>
  </head>
  <body>
    <nav>
      <a href="#">Home</a>
    </nav>
    <div class="canvas">
      <h1>Color Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <h2>Try clicking on one of the color to change the background color</h2>
    </div>
    <script src="colorchanger.js"></script>
  </body>
</html>
```

css file

```css
html{
    margin: 0;
}

span{
    display:block;
}

.canvas{
    margin: 100px auto 100px;
    width: 80%;
    text-align: center;
}

.button{
    width: 100px;
    height: 100px;
    border: solid black 2px;
    display: inline-block;
}

#grey{
    background-color: grey;
}
#white{
    background-color: white;
}
#blue{
    background-color: blue;
}
#yellow{
    background-color: yellow;
}
```
js file
```javascript
const buttons = document.querySelectorAll('.button');
// console.log(buttons)  //returns the nodelist
const bodyPage = document.querySelector('body');

buttons.forEach( function(button){
    // console.log(button);//returns all buttons with html whole span tag
    button.addEventListener('click',function(e){
        // console.log(e);
        // console.log(e.target); 
        const cId = e.target.id;
        // console.log(cId);
        
        switch(cId){
            case 'grey':
                bodyPage.style.backgroundColor=cId;
                break;
            
            case 'white':
                bodyPage.style.backgroundColor=cId;
                break;
            
            case 'blue':
                bodyPage.style.backgroundColor=cId;
                break;
            
            case 'yellow':
                bodyPage.style.backgroundColor=cId;
                break;
            default:
                bodyPage.style.backgroundColor='white';
                break;
        }
    });
});
```


project 2 BMI calculator
only js file
project 2
```javascript
//first form selection due to submit event
const form = document.querySelector('form');
// const height= parseInt(document.querySelector('#height').value) //this usecase will give you an empty value written before providing value

form.addEventListener('submit', function (e) {
  e.preventDefault(); //do not submit value anywhere in form it is by default in url or some another form but here we need value to calculate bmi
  //values
  const height = parseInt(document.querySelector('#height').value); //returns value in string

  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  //checks
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `<span>Your bmi is: ${bmi} You are Underweight</span>`;
    } else if (bmi >= 18.6 || bmi <= 24.9) {
      result.innerHTML = `<span>Your bmi is: ${bmi} You are Perfect</span>`;
    }
    if (bmi > 24.9) {
      result.innerHTML = `<span>Your bmi is: ${bmi} You are Overweight</span>`;
    }
  }
});

```

Project 3 digital clock using of setInterval method basic 
HTML file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Digital Clock</title>
    <style>
      body {
        background-color: #212121;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        background-color: orange;
        font-size: 40px;
        padding: 20px 20px;
        margin-top: 10px;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <div class="center">
      <div id="banner">
        <span>Your Local Time</span>
        <div id="clock"></div>
      </div>
    </div>
    <script src="digiclock.js"></script>
  </body>
</html>

```

Js file

```javascript
const clock = document.getElementById('clock')
//or use query selector


setInterval(function(){
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000)
```

Project 4 guess the number game 

js file

```javascript
let randomNumber = parseInt((Math.random()*100 + 1));

const submit = document.querySelector('#subt')
const userInput =  document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')


let prevGuess = [] //to submit user values 

let numAttempts = 1 //attempts user is allowed

let playGame = true //to check at each step in every game

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess= parseInt(userInput.value);
        
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if(guess<1){
        alert('Please enter a number more than one');
    }
    else if(guess>100){
        alert('Please enter a number less than 100');
    }
    else{
        prevGuess.push(guess)
        if(numAttempts===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}
function checkGuess(guess){
    //to check if number matches the guessed one or not 
    //low or high check message printing
    if(guess === randomNumber){
        displayMessage(`You guessed it right!`)
        endGame()
    }
    else if(guess<randomNumber){
        displayMessage(`Number is too low`)
    }
    else if(guess>randomNumber){
        displayMessage(`Number is too high`)
    }

}
function displayMessage(message){
    //user input value empty and innerhtml add guess and reduce the attempts number
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
    //display guess
    userInput.value=''
    guessSlot.innerHTML+=`${guess} ,`
    numAttempts++
    remaining.innerHTML=`${11-numAttempts}` 
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt((Math.random()*100 + 1));
        prevGuess=[]
        numAttempts=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numAttempts}` 
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHi.innerHTML=''
        playGame = true
    })
}

```
