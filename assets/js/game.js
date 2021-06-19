// function to toggle between showing rules and hiding rules

function showRules(event) {
  var ruleDiv = document.getElementById("game-rules");
  var gameDiv = document.getElementById("game-layout");

  if (ruleDiv.style.display === "none") {
    ruleDiv.style.display = "block";
    gameDiv.style.display = "none";
  } else {
    ruleDiv.style.display = "none";
    gameDiv.style.display = "block";
  }
}

// function for starting the game

function startGame () {
  
}
