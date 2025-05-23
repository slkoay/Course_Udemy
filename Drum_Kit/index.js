var all_button = document.querySelectorAll("button");
var audio = new Audio("./sounds/tom-1.mp3");

function playSound(keyvalue){
   switch(keyvalue) {
  case "w":
    var tom1 = new Audio("./sounds/tom-1.mp3");
    tom1.play();    
    break;
  case "a":
    var tom2 = new Audio("./sounds/tom-2.mp3");
    tom2.play();    
    break;
  case "s":
    var tom3 = new Audio("./sounds/tom-3.mp3");
    tom3.play();    
    break;
  case "d":
    var tom4 = new Audio("./sounds/tom-4.mp3");
    tom4.play();    
    break;
  case "j":
    var snare = new Audio("./sounds/snare.mp3");
    snare.play();    
    break;
  case "k":
    var crash = new Audio("./sounds/crash.mp3");
    crash.play();    
    break;
  case "l":
    var kick = new Audio("./sounds/kick-bass.mp3");
    kick.play();    
    break;
  default:
    console.log(keyvalue);
}};


for(i=0;i<all_button.length;i++){
  all_button[i].addEventListener("click", function(){
    playSound(this.innerHTML);
    btnAnimation(this.innerHTML);
    console.log(this.innerHTML);
  })};

  document.addEventListener("keypress", function(keyPressed){
    console.log(keyPressed.key);
    playSound(keyPressed.key);
    btnAnimation(keyPressed.key);
  });


function btnAnimation(currentKey){
   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setInterval(remove_class, 100);

   function remove_class()
   {
      activeButton.classList.remove("pressed");
   }
}
