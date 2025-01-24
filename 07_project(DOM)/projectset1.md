#DOM Basic projects 

#project 1 color changer

#Html file 
```
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

#css file

```
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
#js file
```
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


#project 2 BMI calculator
#only js file
project 2
```
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