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
  startTimer(15); 
  startrTimerLine(0);
  

}

let nextbtn = document.querySelector(".nextbtn");
let quesCount = 0;

nextbtn.onclick = () => { 

  if (quesCount < questions.length - 1) {
    quesCount++;
    showQuestions(quesCount);
    clearInterval(counter);
    startTimer(timeValue); 
    clearInterval(counterLine);
    startrTimerLine(widthValue);
    nextbtn.style.display = "none";

  }else{
    alert("Quiz Over");
  }
}



// create function to display questions

function showQuestions(index) {
  let quesText = document.querySelector(".myquestion");
  let optionsList = document.querySelector(".myoptions");
  let optionsTag = `<div class="options"><span>`+ questions[index].options[0] +`</span></div>`
                    + `<div class="options"><span>`+ questions[index].options[1] +`</span></div>` 
                    + `<div class="options"><span>`+ questions[index].options[2] +`</span></div>`
                    + `<div class="options"><span>`+ questions[index].options[3] +`</span></div>`
  let quesTag = "<span>" + questions[index].numb + `.` + questions[index].question+ "</span>";
  quesText.innerHTML = quesTag;
  optionsList.innerHTML = optionsTag;


  // optionsTag += `<div class="options"><span>`+ questions[index].options[1] +`</span></div>`;
  // optionsTag += `<div class="options"><span>`+ questions[index].options[2] +`</span></div>`;
  // optionsTag += `<div class="options"><span>`+ questions[index].options[3] +`</span></div>`;
  // options.innerHTML = optionsTag;
  
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

}


let tickIcon = `<div class="tickicon"><i class="bi bi-check-circle-fill"></i></div>`
let crossIcon = `<div class="crossicon"><i class="bi bi-x-circle-fill"></i> </div>`

function checkAnswer(answer){
  clearInterval(counter);
  clearInterval(counterLine);
  let  userAnswer = answer.textContent;
  let correctAnswer = questions[quesCount].answer;
  let desabledOptions = document.querySelector(".myoptions");
  let alloption = desabledOptions.children.length;
  if (userAnswer === correctAnswer) {
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", tickIcon);
  } else {
    answer.insertAdjacentHTML("beforeend", crossIcon);
    answer.classList.add("wrong");

    for (let i = 0; i < alloption; i++) {
      if (desabledOptions.children[i].textContent === correctAnswer) {
        desabledOptions.children[i].classList.add("correct");
        desabledOptions.children[i].insertAdjacentHTML("beforeend", tickIcon);
      }
    }
  }

  for (let i = 0; i < alloption; i++) {
    desabledOptions.children[i].classList.add("disabled");
  }
  nextbtn.style.display = "block";
 
  
}

let timeCount = document.querySelector(".secends span");
let timeValue = 15;  
let counter; 

function startTimer(time){
  counter = setInterval(timer, 1000);
  function timer(){
    time--;
    timeCount.textContent = time;
    if (time < 10) {
      let addZero =  timeCount.textContent;
      timeCount.textContent = "0" + addZero;
    }
    if (time === 0) {
      clearInterval(counter);
      alert("Time Up");
    } 

  } 
   
}

let timeLine = document.querySelector(".timelaps");
let counterLine;
let widthValue = 0;
function startrTimerLine(time){
  counterLine = setInterval(timer, 150);
  function timer(){
    time += 1;  
    timeLine.style.width = time + "%";
    if (time > 319) {
      clearInterval(counterLine);
    }

  } 
   
}











