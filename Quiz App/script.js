const questions = [
    {
      question: "What is the Capital of India?",
      choices: ["Kolkata", "Bangalore", "New Delhi", "Mumbai"],
      correct: 2,
    },
    {
      question: "What is the currency of India?",
      choices: ["Dollar", "Rupee", "Dinar", "Euro"],
      correct: 1,
    },
    {
      question: "When did India become Independent?",
      choices: ["12 Aug,1949", "26 Jan,1950", "15 Sept,1945", "15 Aug,1947"],
      correct: 3,
    },
  
    {
      question: "Which city in India is known as the 'Pink City'?",
      choices: ["Jaipur", "Darjeeling", "Luknow", "Pune"],
      correct: 0,
    },
    {
      question: "Who is the first Prime Minister of India?",
      choices: [
        "Mahathma Gandhi",
        "Jawaharlal Nehru",
        "Rajendhra Prasad",
        "Lal Bahadur Shastri",
      ],
      correct: 1,
    },
  ];
  
  const questionElement = document.querySelector(".quiz-container>h2");
  const radios = document.querySelectorAll("input[type='radio']");
  const labels = document.querySelectorAll("label");
  const submitBtn = document.querySelector("input[type='submit']");
  
  
  const userAnswers = [];
  
 
  let questionIndex = 0;
  
  
  function loadNextQuestion() {
    questionElement.innerHTML = questions[questionIndex].question;
    labels.forEach((label, idx) => {
      label.innerHTML = questions[questionIndex].choices[idx];
    });
    radios.forEach((radio) => {
      radio.checked = false;
    });
    questionIndex++;
  }
  
  submitBtn.addEventListener("click", () => {
    
    let selectedAnswer = -1;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked === true) {
        selectedAnswer = i;
        break;
      }
    }
  
    
    userAnswers.push(selectedAnswer);
  
    
    if (questionIndex < questions.length) {
      loadNextQuestion();
    } else {
      let numberOfCorrectAnswers = 0;
      for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === questions[i].correct) {
          numberOfCorrectAnswers++;
        }
      }
  
      
      const quizContainer = document.querySelector(".quiz-container");
      quizContainer.classList.add("invisible");
      const resultContainer = document.querySelector(".result-container");
      resultContainer.classList.remove("invisible");
  
      
      const [x, y] = document.querySelectorAll(".result-container>h2>span");
      x.innerHTML = numberOfCorrectAnswers;
      y.innerHTML = questions.length;
  
      
    }
  });
  
  
  loadNextQuestion();