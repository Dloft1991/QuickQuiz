

function startGame() {
  document.getElementById("questions").style.display = "block";
  document.getElementById("submit-btn").style.display = "block";
  document.getElementById("start-btn").style.display = "none";
  

}
function submit() {
  console.log("working");
      var question1 = document.questions.question1.value;
      var question2 = document.questions.question2.value;
      var question3 = document.questions.question3.value;
      var question4 = document.questions.question4.value;
      var correct = 0;
  
      if (question1 == "Purple") {
          correct++;
      }
      if (question2 == "Chris Pratt") {
          correct++;
      }
      if (question3 == "Queens") {
          correct++;
      }
      if (question4 == "Three") {
          correct++;
      }
  
      document.getElementById("questions").style.visibility = "hidden";
      document.getElementById("reset-btn").style.display = "block";
      document.getElementById("start-btn").style.display = "none";
      document.getElementById("submit-btn").style.display = "none";
      document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
      
      document.getElementById("after_submit").style.visibility = "visible";
  }