var n1 = Math.floor(Math.random()*6)+1;  //Generate number 1
var n2 = Math.floor(Math.random()*6)+1;  //Generate number 1

var p1 = document.querySelectorAll(".dice .img1");
var p2 = document.querySelectorAll(".dice .img2");

//var roll_1="./dice" + n1 + ".png"; 
//var roll_2="./dice" + n2 + ".png"; 

p1[0].setAttribute("src", "./dice" + n1 + ".png");
p2[0].setAttribute("src", "./dice" + n2 + ".png");  //"./dice1.png";

if (n1>n2){
  document.querySelector("h1").innerHTML="Player 1 Wins";
} else if(n1<n2){
document.querySelector("h1").innerText="Player 2 Wins";
}else{
     document.querySelector("h1").innerText="Draw";
}
