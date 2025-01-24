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