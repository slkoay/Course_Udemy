var all_button = document.querySelectorAll("button");
var audio = new Audio("./sounds/tom-1.mp3");

for(i=0;i<all_button.length;i++){
  all_button[i].addEventListener("click", function(){ 
    //audio.play();
    //console.log(this.innerHTML);

    switch(this.innerHTML) {
  case w:
    var tom1 = new Audio("./sounds/tom-1.mp3");
    tom1.play();    
    break;
  case a:
    var tom2 = new Audio("./sounds/tom-2.mp3");
    tom2.play();    
    break;
  case s:
    var tom3 = new Audio("./sounds/tom-3.mp3");
    tom3.play();    
    break;
  case d:
    var tom4 = new Audio("./sounds/tom-4.mp3");
    tom4.play();    
    break;
  case j:
    var tom1 = new Audio("./sounds/tom-1.mp3");
    tom1..play();    
    break;
  case k:
    var tom1 = new Audio("./sounds/tom-1.mp3");
    tom1..play();    
    break;
  case l:
    var tom1 = new Audio("./sounds/tom-1.mp3");
    tom1..play();    
    break;
  default:
    // code block
}
  
  });


};

