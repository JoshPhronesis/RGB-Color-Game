var colors =['red','green','blue','white','yellow','cyan'];

var squares = document.querySelectorAll(".square");
var pickedColor =randomColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent=pickedColor;

for(var i=0; i<squares.length;i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click",function(){
        var clickedColor = (this.style.background);
        if(clickedColor===pickedColor){
            messageDisplay.textContent="Correct";
            changeColors(clickedColor);
     }else{
            this.style.background="#232323";
            messageDisplay.textContent="Try Again";
        }
    })
}

function changeColors(color){
    for(var i =0; i<squares.length;i++){
        squares[i].style.background=color;
    }
}

function randomColor(){
    var randNum = Math.floor(Math.random()*colors.length);
    return colors[randNum];
}