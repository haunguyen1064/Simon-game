var gamePattern = new Array();
var userClickedPattern = new Array();
var level = 0;
var started = false;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function nextSequence() {
  var buttonCorlours = new Array("red", "blue", "green", "yellow");
  var randomNumber= Math.floor(Math.random()*4);
  var randomChosenColours = buttonCorlours[randomNumber];
  gamePattern.push(randomChosenColours);
  playSound(gamePattern[gamePattern.length-1]);
  $("#" + gamePattern[gamePattern.length-1]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  level++;
  $("h1").text("Level " + level);
  // $(document).off("keypress");
  userClickedPattern = [];

  };



/*step 4*/
var userChosenColour;
$(".btn").click(function() {
  if (level === 0) {return}
userChosenColour = this.id;
userClickedPattern.push(userChosenColour);
playSound(userChosenColour);
animatePress (userChosenColour);
checkAnswer(userClickedPattern.length -1)
});


 /*step 5*/
function playSound (name) {
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

 /*step 6*/
 function animatePress (currentColour) {
  $("#"+currentColour).addClass("pressed");
  setTimeout(function () {
    $("#"+currentColour).removeClass("pressed")
  }, 100
);
};

/*step 7*/
// $(document).keypress(nextSequence);


/*step 8*/

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] == gamePattern[currentLevel]){
  console.log("success");
  console.log(currentLevel);
  console.log(level);
    if (currentLevel== (level-1)) {
        setTimeout(nextSequence,1000);
      }
} else {
  console.log("wrong");
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over")}
, 200);
  $("h1").text("Game Over, Press Any Key to Restart");
  startOver();
    }

};

function startOver () {
  level = 0;
  gamePattern = [];
  started = false;
  // $(document).keypress(nextSequence);
};
