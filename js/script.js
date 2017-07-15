var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");

var messageDisplay = document.querySelector("#message");

colorDisplay.textContent=pickedColor;

for(var i=0; i<squares.length;i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click",function(){
        var clickedColor = (this.style.background);
        if(clickedColor===pickedColor){
            messageDisplay.textContent="Correct";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
     }else{
            this.style.background="#232323";
            messageDisplay.textContent="Try Again";
        }
    })
}

function generateRandomColors(num){
    var colorArr = [];
    for(var i=0; i<num;i++){
        colorArr.push(randomColors());
    }
    return colorArr;
}

function randomColors(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}

function changeColors(color){
    for(var i =0; i<squares.length;i++){
        squares[i].style.background=color;
    }
}

function pickColor(){
    var randNum = Math.floor(Math.random()*colors.length);
    return colors[randNum];
}