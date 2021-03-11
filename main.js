


function GameStart() {
    console.log("I was clicked")
    //showing the game
    document.getElementById("game-container").style.display = "block";
    //start button gone
    document.getElementById("start-btn").style.display = "none";
   //put the question from array
   document.getElementById("theQuestion").innerHTML = questions[0].question;
   console.log(questions[0].question);
}

function NextQuestion() {

}

function Submit() {

}

var questions = 
      [
        {
          question: "What is the capital of United Kingdom?",
          choices: ["Manchester", "Birmingham", "London", "Birmingham"],
          answer: 2
        },
        
        {
          question: "What is the capital of United States?",
          choices: ["California", "New York", "Miami", "Florida"],
          answer: 1
        }
        
        
      ];