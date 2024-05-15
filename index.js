if(window.performance.navigation.type ===1)
    rollDice();

function rollDice(){
var random1 = Math.ceil(Math.random()*6);
var random2 = Math.ceil(Math.random()*6);

document.querySelector(".img1").setAttribute("src" , "images/dice" + random1 + ".png");
document.querySelector(".img2").setAttribute("src" , "images/dice" + random2 + ".png");

if(random1>random2)
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
else if(random1<random2)
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
else
    document.querySelector("h1").innerHTML = "Draw!";
}