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
        id: "4",
        value: "0",
        correct: true,
      },
      {
        id: "5",
        value: "-5",
        correct: false,
      },
      {
        id: "6",
        value: "-6",
        correct: false,
      },
    ],
  },
  { 
    question: "What is the longest river in the world?",
    answers: [
      {
        id: "7",
        value: "Nile",
        correct: true,
      },
      {
        id: "8",
        value: "Amazon",
        correct: false,
      },
      {
        id: "9",
        value: "Yangtze",
        correct: false,
      },
    ],
  },
  {
    question: "How many chromosomes are in the human genome?",
    answers: [
      {
        id: "10",
        value: "42",
        correct: false,
      },
      {
        id: "11",
        value: "44",
        correct: false,
      },
      {
        id: "12",
        value: "46",
        correct: true,
      },
    ],
  },
  {
    question: "Which of these characters are friends with Harry Potter?",
    answers: [
      {
        id: "13",
        value: "Ron Weasley",
        correct: true,
      },
      {
        id: "14",
        value: "Draco Malfoy",
        correct: false,
      },
      {
        id: "15",
        value: "Hermione Granger",
        correct: true,
      },
    ],
  },
  {
    question: "What is the capital of Canada?",
    answers: [
      {
        id: "16",
        value: "Toronto",
        correct: false,
      },
      {
        id: "17",
        value: "Ottawa",
        correct: true,
      },
      {
        id: "18",
        value: "Vancouver",
        correct: false,
      },
    ],
  },  
];

let answerResults = {};
let selectedAnswers = {};

const quiz = document.getElementById("quiz");
const questions = document.getElementById("questions");
const indicator = document.getElementById("indicator");
const results = document.getElementById("results");
const btnNext = document.getElementById("btn-next");
const btnRestart = document.getElementById("btn-restart");

const outputQuestions = (index) => {
  outputIndicator(index + 1);

  questions.dataset.currentQuestion = index;
  const questionData = DATA[index];
  const isMultipleCorrect = questionData.answers.filter(answer => answer.correct).length > 1;

  const outputAnswers = () => questionData.answers
    .map((answer) => `
        <li>
            <label>
                <input class="answer-input" type="${isMultipleCorrect ? 'checkbox' : 'radio'}" name=${index} value=${answer.id}>
                ${answer.value}
            </label>
         </li>
    `)
    .join('');

  questions.innerHTML = `
    <div class="quiz-questions-item">
    <div class="quiz-questions-item-question">${questionData.question}</div>
    <ul class="quiz-questions-item-answers">${outputAnswers()}</ul> 
</div>
`;

  selectedAnswers = {};
  btnNext.disabled = true; 
};

const outputResults = () => {
  let content = "";

  const getClassname = (answer, questionIndex) => {
    let classname = "";
    const userAnswers = answerResults[questionIndex] || [];

    if (!answer.correct && userAnswers.includes(answer.id)) {
      classname = "answer--invalid";
    } else if (answer.correct) {
      classname = "answer--valid";
    }

    return classname;
  };

  const getAnswers = (questionIndex) => {
    return DATA[questionIndex].answers.map((answer) => {
      return `<li class=${getClassname(answer, questionIndex)}>${answer.value}</li>`;
    }).join("");
  }

  DATA.forEach((question, index) => {
    content += `
      <div class="quiz-results-item">
        <div class="quiz-results-item-question">${question.question}</div>
        <ul class="quiz-results-item-answers">${getAnswers(index)}</ul>
      </div>
    `;
  })
  results.innerHTML = content;
};

const outputIndicator = (currentQuestion) => {
  indicator.innerHTML = `${currentQuestion}/${DATA.length}`;
};

const checkAnswers = (questionIndex) => {
  const questionData = DATA[questionIndex];
  const correctAnswers = questionData.answers.filter(answer => answer.correct).length;
  const selectedCount = Object.keys(selectedAnswers).length;

  return correctAnswers > 1 ? selectedCount >= 2 : selectedCount === 1;
};

quiz.addEventListener("change", (event) => {
  if (event.target.classList.contains("answer-input")) {
    const questionIndex = event.target.name;

    if (event.target.type === "checkbox") {
      if (event.target.checked) {
        selectedAnswers[event.target.value] = true;
      } else {
        delete selectedAnswers[event.target.value];
      }
    } else {
      selectedAnswers = { [event.target.value]: true };
    }

    btnNext.disabled = !checkAnswers(questionIndex);
  }
});

quiz.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-next")) {
    const currentQuestionIndex = Number(questions.dataset.currentQuestion);
    answerResults[currentQuestionIndex] = Object.keys(selectedAnswers);

    if (DATA.length === currentQuestionIndex + 1) {
      questions.classList.add("questions--hidden");
      indicator.classList.add("indicator--hidden");
      results.classList.add("results--visiable");
      btnNext.classList.add("btnNext--hidden");
      btnRestart.classList.add("btnRestart--visiable");

      outputResults();
    } else {
      outputQuestions(currentQuestionIndex + 1);
    }
  }

  if (event.target.classList.contains("btn-restart")) {
    answerResults = {};
    results.innerHTML = "";

    questions.classList.remove("questions--hidden");
    indicator.classList.remove("indicator--hidden");
    results.classList.remove("results--visiable");
    btnNext.classList.remove("btnNext--hidden");
    btnRestart.classList.remove("btnRestart--visable");

    outputQuestions(0);
  }
});

outputQuestions(0);


// Выбираем кнопку
const btn = document.querySelector(".btn-theme");
// Отслеживаем щелчок по кнопке
btn.addEventListener("click", function () {
  // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
  document.body.classList.toggle("dark-theme");
});




/* body {
    color: #222;
    background: #fff;
  }
  a {
    color: #0033cc;
  }
  
  /* Стили Тёмной темы */
 /* body.dark-theme {
    color: #eee;
    background: #121212;
  }
  body.dark-theme a {
    color: #809fff;
  }*/