var n1 = Math.floor(Math.random()*6)+1;  //Generate number 1
var n2 = Math.floor(Math.random()*6)+1;  //Generate number 1

p1 = document.querySelectorAll(".dice .img1");
p2 = document.querySelectorAll(".dice .img2");

roll_1="./dice" + n1 + ".png"; 
roll_2="./dice" + n2 + ".png"; 

p1[0].setAttribute("src", roll_1);
p2[0].setAttribute("src", roll_2);  //"./dice1.png";
