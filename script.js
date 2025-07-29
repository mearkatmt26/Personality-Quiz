var vridicuScore = 0;
var ansuraScore = 0;
var questionCount = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var restart = document.getElementById("restart");

q1a1.addEventListener("click", ansura);
q1a2.addEventListener("click", vridicu);

q2a1.addEventListener("click", vridicu);
q2a2.addEventListener("click", ansura);

q3a1.addEventListener("click", ansura);
q3a2.addEventListener("click", vridicu);

restart.addEventListener("click", restarting);

ansuraScore = 0;
vridicuScore = 0;

function ansura() {
  ansuraScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " ansuraScore = " + ansuraScore);

  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }
}


function vridicu() {  
  vridicuScore += 1; 
  questionCount += 1;

  console.log("questionCount = " + questionCount + "vridicuScore = " + vridicuScore);
  
  if (questionCount == 3) {
    console.log("The quiz is done!")
    updateResult();
  }
}


function updateResult() {
  if (ansuraScore >= 2) {
    result.innerHTML = "You are an Ansura!";
    console.log("You are an Ansura!");
  } else if (vridicuScore >= 2) {
    result.innerHTML = "You are a Vridicu!";
    console.log("You are a Vridicu!");
  }
}

function restarting() {
  result.innerHTML = "You are a ...";
  questionCount = 0;
  ansuraScore = 0;
  vridicuScore = 0;
}
