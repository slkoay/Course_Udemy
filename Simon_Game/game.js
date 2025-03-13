//alert("This is working");
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern =[];
var started = false;
var level = 0;

function nextSequence(){
   userClickedPattern =[];
   level++;
   $("#level-title").text("Level " + level);
   var randomNumber=Math.floor(Math.random()*4);
   var randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
   $("#"+randomChosenColour).fadeOut("fast");
   $("#"+randomChosenColour).fadeIn("fast");
   playSound(randomChosenColour);
}

$(".btn").click(function(){
  userChosenColour = $(this).attr("id");
  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});


$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function checkAnswer(currentLevel){
  //console.log("userClickedPattern " + userClickedPattern);
  //console.log("gamePattern " + gamePattern);
  //console.log(gamePattern[currentLevel-1]);
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("correct");
    if(userClickedPattern.length===gamePattern.length){
      setTimeout(function () {
          nextSequence();
        }, 1000);
    }
  }else{
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setInterval(function(){$("body").removeClass("game-over");}, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    started = false;
    level = 0;
    gamePattern = [];
  }
  
  
}

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
   audio.play();
}


function animatePress(currentColour){
   $("."+currentColour).addClass("pressed");
   setInterval(function(){$("."+currentColour).removeClass("pressed");}, 100);
}
