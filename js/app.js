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
  showQuestions(0);
  

}

let nextbtn = document.querySelector(".nextbtn");
let quesCount = 0;

nextbtn.onclick = () => { 

  if (quesCount < questions.length - 1) {
    quesCount++;
    showQuestions(quesCount);
  }else{
    alert("Quiz Over");
  }
}



// create function to display questions

function showQuestions(index) {
  let quesText = document.querySelector(".myquestion");
  let quesTag = "<span>" + questions[index].numb + `.` + questions[index].question+ "</span>";
  quesText.innerHTML = quesTag;
  let options = document.querySelector(".myoptions");
  let optionsTag = `<div class="options"><span>`+ questions[index].options[0] +`</span></div>`;
  optionsTag += `<div class="options"><span>`+ questions[index].options[1] +`</span></div>`;
  optionsTag += `<div class="options"><span>`+ questions[index].options[2] +`</span></div>`;
  optionsTag += `<div class="options"><span>`+ questions[index].options[3] +`</span></div>`;
  options.innerHTML = optionsTag;
  
  let questionCount = document.querySelector(".question_left"); 
  let questionCountTag = `<span>`+ questions[index].numb + ` Of ` + questions.length + ` Questions` + `</span>`;
  questionCount.innerHTML = questionCountTag;

  let option = document.querySelectorAll(".options");
  for (let i = 0; i < option.length; i++) { 
    option[0].setAttribute("onclick", "checkAnswer(this)");
    option[1].setAttribute("onclick", "checkAnswer(this)");
    option[2].setAttribute("onclick", "checkAnswer(this)");
    option[3].setAttribute("onclick", "checkAnswer(this)");
} 

};


function checkAnswer(answer){
  let  userAnswer = answer.textContent;
  let correctAnswer = questions[quesCount].answer;
  if (userAnswer === correctAnswer) {
    answer.classList.add("correct");
  } else {

    answer.classList.add("wrong");
  }

}











