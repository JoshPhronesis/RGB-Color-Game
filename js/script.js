var numOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");

var messageDisplay = document.querySelector("#message");

var resetButton = document.querySelector("#reset");
var modeBtns =document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons event listeners
    setupModeButtons();
    setupSquares();
    
    reset();
}

function setupModeButtons(){
     for(var i=0; i<modeBtns.length;i++){
        modeBtns[i].addEventListener("click", function(){
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");

            this.classList.add("selected");
            this.textContent==="Easy"? numOfSquares=3 :numOfSquares=6;
            reset();
        })
    }
}

function setupSquares(){
    for(var i=0; i<squares.length;i++){
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
}

function reset(){
    colors=generateRandomColors(numOfSquares);
    pickedColor = pickColor();
    messageDisplay.textContent="";
    resetButton.textContent="New Color";
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display= "block";
            squares[i].style.background=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
    h1.style.background="steelblue";
}

colorDisplay.textContent=pickedColor;



resetButton.addEventListener("click",function(){
    reset();
})

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