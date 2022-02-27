
var randomNum1=Math.floor(Math.random() *6) + 1;

var randomNum2=Math.floor(Math.random() *6) + 1;

var imageOnePath="./" + "dice" + randomNum1 + ".png";

var imageTwoPath="./" + "dice" + randomNum2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src" , imageOnePath );

document.querySelectorAll("img")[1].setAttribute("src" , imageTwoPath );

if(randomNum1 > randomNum2){
document.querySelector("h1").innerHTML = "player 1 wins!";
}

else if (randomNum1 < randomNum2) {
document.querySelector("h1").innerHTML = "player 2 wins!";
}

else{
document.querySelector("h1").innerHTML = "Draw!";
}

