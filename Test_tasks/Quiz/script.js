const DATA = [
  {
    question: "How many planets are in the solar system?",
    answers: [
      {
        id: "1",
        value: "8",
        correct: true,
      },
      {
        id: "2",
        value: "9",
        correct: false,
      },
      {
        id: "3",
        value: "10",
        correct: false,
      },
    ],
  },
  {
    question: "What is the freezing point of water?",
    answers: [
      {
        id: "3",
        value: "0",
        correct: true,
      },
      {
        id: "4",
        value: "-5",
        correct: false,
      },
      {
        id: "5",
        value: "-6",
        correct: false,
      },
    ],
  },
];

let answerResults = {
};

const quiz = document.getElementById("quiz");
const questions = document.getElementById("questions");
const indicator = document.getElementById("indicator");
const results = document.getElementById("results");
const btnNext = document.getElementById("btn-next");
const btnRestart = document.getElementById("btn-restart");

const outputQuestions = (index) => {
  outputIndicator (index + 1);

  questions.dataset.currentQuestion = index;

  const outputAnswers = () => DATA[index].answers
    .map((answer) => `
        <li>
            <label>
                <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                ${answer.value}
            </label>
         </li>
    `)
    .join('');

  questions.innerHTML = `
    <div class="quiz-questions-item">
    <div class="quiz-questions-item-question">${DATA[index].question}</div>
    <ul class="quiz-questions-item-answers">${outputAnswers()}</ul> 
</div>
`;
};

const outputResults = () => {
    let content = "";
    DATA.forEach((question, index) => {
        content += `
        <div class="quiz-results-item">
                <div class="quiz-results-item-question">${question.question}</div>
                <ul class="quiz-results-item-answers">
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>                    
                </ul> 
            </div>
        `;
    })
    results.innerHTML = content;
};

const outputIndicator = (currentQuestion) => {
    indicator.innerHTML = `${currentQuestion}/${DATA.length}`;
};

quiz.addEventListener("change", (event) => {
    if (event.target.classList.contains("answer-input")) {
        answerResults[event.target.name] = event.target.value;
        btnNext.disabled = false;
    }
});

quiz.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-next")) {
    outputQuestions(Number(questions.dataset.currentQuestion) + 1);
    if (DATA.length === Number(questions.dataset.currentQuestion) + 1) {

    }else {
        outputQuestions(Number(questions.dataset.currentQuestion) + 1)  
    }


    btnNext.disabled = true;
  }

  if (event.target.classList.contains("btn-results")) {
    console.log("С начала");
  }
});

outputQuestions(0);