var all_button = document.querySelectorAll("button");
var audio = new Audio("./sounds/tom-1.mp3");

for(i=0;i<all_button.length;i++){
  all_button[i].addEventListener("click", function(){ 
    audio.play();
    console.log(this.innerHTML);});
};

