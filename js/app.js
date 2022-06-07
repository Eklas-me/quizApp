let quiz = document.querySelector("#quiz");
let openQuiz = document.querySelector(".quiz-screen");


quiz.onclick = () => {
  openQuiz.classList.add("show");
};



// start quiz

let quizButton = document.querySelector(".quizButton button");
let openRuleBox = document.querySelector(".rulesBox");
let myQuizApp = document.querySelector(".myQuizApp");
let exit = document.querySelector(".exit");
let start = document.querySelector(".start");
let question = document.querySelector(".questions");

quizButton.onclick = () => {
  myQuizApp.classList.add("hide");
  openRuleBox.classList.add("active");
}
exit.onclick = () => {
  openRuleBox.classList.remove("active");
  myQuizApp.classList.remove("hide");
}
start.onclick = () => {
  question.classList.add("active");
  openRuleBox.classList.remove("active");
  
}



