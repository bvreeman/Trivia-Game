

// const capitalQuestions = [
//     {question:"<h2>What is the state capital of Alabama?</h2>",
//     answers: ["Juneau","Indianapolis","Montgomery","Olympia"],
//     answerKey: "Montgomery",
//     questionTime: 100//     },


const questionsArr = [
  {
    question: 'What is the capital of Alabama?',
    answers: ['Montgomery', 'Phoenix', 'Richmond', 'Springfield'],
    correct: 'Montgomery',
  },

  {
    question: 'What is the capital of North Carolina?',
    answers: ['Clinton', 'Jacksonville', 'Greensboro', 'Raleigh'],
    correct: 'Raleigh',
  },

  {
    question: 'What is the capital of Alaska?',
    answers: ['Juneau', 'Olympia', 'Little Rock', 'Austin'],
    correct: 'Juneau',
  },

  {
    question: 'What is the capital of Arkansas?',
    answers: ['Columbia', 'Little Rock', 'Harrisburg', 'Atlanta'],
    correct: 'Little Rock',
  },

  {
    question: 'What is the capital of Arizona?',
    answers: ['Charleston', 'Montpelier', 'St. Paul', 'Phoenix'],
    correct: 'Phoenix',
  },

  {
    question: 'What is the capital of Minnesota?',
    answers: ['Santa Fe', 'Bismark', 'St. Paul', 'Lansing'],
    correct: 'St. Paul',
  },
];

// console.log(questionsArr[0].correct);
// console.log(questionsArr[1].correct);
// console.log(questionsArr[2].correct);
// console.log(questionsArr[3].correct);
// console.log(questionsArr[4].correct);
// console.log(questionsArr[5].correct);


let cnt = 0;
let nextQuest;
let timerTime = 60;
let score = 0;
const correctAnswers = ['Montgomery', 'Raleigh', 'Juneau', 'Little Rock', 'Phoenix', 'St. Pauls'];
let guessedAnswers = [];

// Because I wasn't figuring out how to compare the two arrays, I used this
// to show the answers at the end.
// It's not working 100% because I need to figure out how to change the position
// value from guessedAnswers.push(radios[i].value); into words.

function gameOver() {
  document.getElementById('results').innerHTML = (`Your answers were ${guessedAnswers}.`);
  document.getElementById('correct').innerHTML = (`Correct answers were ${correctAnswers.join(', ')}.`);
  console.log('thanks for playing');
}

function stopTimer() {
  clearInterval(counter);
}

function startTimer() {
  $('.timer').html(`<p>Time Remaining ${timerTime} seconds</p>`);
  counter = setInterval(runTimer, 1000);

  function runTimer() {
    timerTime--;
    $('#timer').html(`<p>Time Remianing: ${timerTime} seconds</p>`);
    if (timerTime === 0) {
      stopTimer();
      gameOver();
    } else if (cnt === questionsArr.length) {
      stopTimer();
      gameOver();
    }
  }
}

function startGame() {
  $('.radioButtons').empty();
  nextQuest();
  startTimer();
}

$(document).ready(function() {
  $('#startQuiz').click(function() {
    startGame();
  });
});

function restartGame() {
  clearInterval(counter);
  timerTime = 60;
  cnt = 0;
  score = 0;
  startGame();
  guessedAnswers = [];
}

$(document).ready(function() {
  $('#restartQuiz').click(function() {
    restartGame();
  });
});

$(function() {
  $('#restartQuiz').hide();
});

$(document).ready(function() {
  $('#startQuiz').click(function() {
    $('#restartQuiz').show();
    $('#startQuiz').hide();
  });
});

// An attempt at seeing if the two arrays are equal

// function answersArray() {
//   const correctAnswers = [0, 3, 0, 1, 3, 2];

//   const length = Math.min(guessedAnswers.length, correctAnswers.length);
//   for (i = 0; i < inputs.length; i++) {
//     if (inputs[i].checked) {
//       guessedAnswers.push(inputs[i].value);
//     }
//   }
//   for (i = 0; i < guessedAnswers.length; i++) {
//     if (guessedAnswers[i] === correctAnswers[i]) {
//       score++;
//     }
//   }
// }

// This was another attempt at seeing if they were equal

// function arraysEqual() {
//   if (correctAnswers.length === guessedAnswers.length) {
//     score++;
//   }
//   for (let i = correctAnswers.length; i--;) {
//     if (correctAnswers[i] === guessedAnswers[i]) {
//       score++;
//     }
//   }

//   return true;
// }

$(function() {
  nextQuest = function() {
    $('.question-title').text(questionsArr[cnt].question);
    const answers = questionsArr[cnt].answers;
    for (let i = 0; i < answers.length; i++) {
      $('.radioButtons').prepend(`<input type='radio' name='choices' value=${i} />${answers[i]}<br/>`);
      if (cnt === questionsArr.length) {
        gameOver();
      }
    }
  };

  $('.submit').click(function(e) {
    e.preventDefault();
    const radios = $('input');
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        // This is where I'm pushing which radiobutton was checked into guessedAnswers array
        guessedAnswers.push(radios[i].value);
      }
    }
    console.log(guessedAnswers);
    // console.log(arraysEqual());
    console.log(score);
    cnt += 1;
    $('.radioButtons').empty();
    nextQuest();
  });
});

// if (guessedAnswers[] === 0) {
//   score++;
// } if (guessedAnswers[1] === 3) {
//   score++;
// } if (guessedAnswers[2] === 0) {
//   score++;
// } if (guessedAnswers[3] === 1) {
//   score++;
// } if (guessedAnswers[4] === 0) {
//   score++;
// } if (guessedAnswers[5] === 2) {
//   score++;
// }
// checkInputs();
// arraysEqual();

// function checkInputs() {

// }

// function equalArrays() {
//   if (cnt === questionsArr.length) {
//     then checkInputs();

//     }
//   }

// const inputs = document.getElementsByTagName('input');

// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const submitButton = document.getElementById('submit');

// function showResults(){
//   const answerContainers = quizContainer.querySelectorAll('.answers');
//   let correctAnswers = 0;
//   questionsArr.forEach( ())
// }

// function checkAns(){
//   if($("input["))
// }

// const statesArray = [
//   ['What is the capital of Alabama?', "Springfield", "Phoenix", "Montgomery", "Richmond"]
//   ['What is the capital of Alaska?', "Juneau", "Olympia", "Little Rock", "Austin"]
//   ['What is the capital of Arizona?', "Charleston", "Montpelier", "St. Paul", "Phoenix"]
//   ['What is the capital of Arkansas?', "Columbia", "Little Rock", "Harrisburg", "Atlanta"]
//   ['What is the capital of California?', "Sacramento",
//   ['What is the capital of Colorado?',
//   ['What is the capital of Connecticut?',
//   ['What is the capital of Delaware?',
//   ['What is the capital of Florida?',
//   ['What is the capital of Georgia?',
//   ['What is the capital of Hawaii?',
//   ['What is the capital of Idaho?',
//   ['What is the capital of Illinois?',
//   ['What is the capital of Indiana?',
//   ['What is the capital of Iowa?',
//   ['What is the capital of Kansas?',
//   ['What is the capital of Kentucky?',
//   ['What is the capital of Louisiana?',
//   ['What is the capital of Maine?',
//   ['What is the capital of Maryland?',
//   ['What is the capital of Massachusetts?',
//   ['What is the capital of Michigan?',
//   ['What is the capital of Minnesota?',
//   ['What is the capital of Mississippi?',
//   ['What is the capital of Missouri?',
//   ['What is the capital of Montana?',
//   ['What is the capital of Nebrasa?',
//   ['What is the capital of Nevada?',
//   ['What is the capital of New Hampshire?',
//   ['What is the capital of New Jersey?',
//   ['What is the capital of New Mexico?',
//   ['What is the capital of New York?',
//   ['What is the capital of North Carolina?',
//   ['What is the capital of North Dakota?',
//   ['What is the capital of Ohio?',
//   ['What is the capital of Oklahoma?',
//   ['What is the capital of Oregon?',
//   ['What is the capital of Pennsylvania?',
//   ['What is the capital of Rhode Island?',
//   ['What is the capital of South Carolina?',
//   ['What is the capital of South Dakota?',
//   ['What is the capital of Tennessee?',
//   ['What is the capital of Texas?',
//   ['What is the capital of Utah?',
//   ['What is the capital of Vermont?',
//   ['What is the capital of Virginia?',
//   ['What is the capital of Washington?',
//   ['What is the capital of West Virginia?',
//   ['What is the capital of Wisconsin?',
//   ['What is the capital of Wyoming?'
// ];

// const statesArray = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
//   'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
//   'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
//   'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
//   'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
//   'Nebrasa', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
//   'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
//   'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
//   'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
//   'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

// const capitalArray = ['Montgomery', 'Juneau', 'Phoenix', 'Little Rock', 'Sacramento',
//  'Denver', 'Hartford', 'Dover', 'Tallahassee', 'Atlanta',
//  'Honolulu', 'Boise', 'Springfield', 'Indianapolis', 'Des Moines', 'Topeka',
//   'Frankfort', 'Baton Rouge', 'Augusta', 'Annapolis', 'Boston',
//   'Lansing', 'St. Paul', 'Jackson', 'Jefferson City', 'Helena',
//   'Lincoln', 'Carson City', 'Concord', 'Trenton', 'Santa Fe',
//   'Albany', 'Raleigh', 'Bismark', 'Columbus', 'Oklahoma City',
//   'Salem', 'Harrisburg', 'Providence', 'Columbia',
//   'Pierre', 'Nashville', 'Austin', 'Salt Lake City', 'Montpelier', 'Richmond',
//   'Olympia', 'Charleston', 'Madison', 'Cheyenne'];

// window.addEventListener('load', renderQuestion, false);

