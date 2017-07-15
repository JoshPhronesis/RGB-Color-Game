var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");

var messageDisplay = document.querySelector("#message");

var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn =document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    numOfSquares=3;
    easyBtn.classList.toggle("selected");
    hardBtn.classList.toggle("selected");
    //generate news colors
    colors=generateRandomColors(numOfSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickColor();
    for(var i = 0; i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
})
hardBtn.addEventListener("click", function(){
    numOfSquares=6;
    easyBtn.classList.toggle("selected");
    hardBtn.classList.toggle("selected");
    colors=generateRandomColors(numOfSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickColor();
    for(var i = 0; i<squares.length;i++){
        squares[i].style.display="block";
        squares[i].style.background=colors[i];
    }
})

resetButton.addEventListener("click",function(){
    colors=generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=colors[i];
    }
    h1.style.background="#232323";
})

colorDisplay.textContent=pickedColor;

for(var i=0; i<squares.length;i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click",function(){
        var clickedColor = (this.style.background);
        if(clickedColor===pickedColor){
            resetButton.textContent="Play again ?";
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