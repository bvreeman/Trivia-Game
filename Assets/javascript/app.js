

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

let cnt = 0;
let nextQuest;
let timerTime = 30;
let score = 0;
// const correctAnswers = ['Montgomery = 0', 'Raleigh = 3', 'Juneau = 0', 'Little Rock = 1', 'Phoenix = 3', 'St. Paul = 2'];
const correctAnswers = [0, 3, 0, 1, 3, 2];
let guessedAnswers = [];

// Game Over function
function hideContent() {
  $('.radioButtons').hide();
  $('#submit').hide();
  $('#timer').hide();
  $('.question-title').hide();
}

function gameOver() {
  hideContent();
  checkInputs();
  document.getElementById('results').innerHTML = (`You got ${score} out of 6 right!`);

  console.log('thanks for playing');
}

// sets up the gameOver function if time reaches zero.
function timeOut() {
  hideContent();
  checkInputs();
  document.getElementById('results').innerHTML = (`You ran out of time. You got ${score} out of 6 right!`);
}

// Timer functions

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
      timeOut();
    } else if (cnt === questionsArr.length) {
      stopTimer();
      gameOver();
    }
  }
}

// Function to get the gameboard set and start the timer
function startGame() {
  $('.radioButtons').empty();
  nextQuest();
  startTimer();
}
// Starts the game on the click of the Start Game button
$(document).ready(function() {
  $('#startQuiz').click(function() {
    startGame();
  });
});

// Reset function
function restartGame() {
  clearInterval(counter);
  timerTime = 30;
  cnt = 0;
  score = 0;
  startGame();
  guessedAnswers = [];
  $('#results').empty();
  $('.radioButtons').show();
  $('#submit').show();
  $('#timer').show();
  $('.question_box').show();
}

// Resets the game once clicking the Restart Game button
$(document).ready(function() {
  $('#restartQuiz').click(function() {
    restartGame();
  });
});

// Hides the Restart Game button at the start of the game
$(function() {
  $('#restartQuiz').hide();
  $('#submit').hide();
});

// Makes the Start Game button disappear once clicked and the Restart Game button appear
$(document).ready(function() {
  $('#startQuiz').click(function() {
    $('#restartQuiz').show();
    $('#startQuiz').hide();
    $('#submit').show();
  });
});

// Checks through my answers and reports a score through the checkInputs function
function checkInputs() {
  if (guessedAnswers[0] == correctAnswers[0]) {
    score++;
  } if (guessedAnswers[1] == correctAnswers[1]) {
    score++;
  } if (guessedAnswers[2] == correctAnswers[2]) {
    score++;
  } if (guessedAnswers[3] == correctAnswers[3]) {
    score++;
  } if (guessedAnswers[4] == correctAnswers[4]) {
    score++;
  } if (guessedAnswers[5] == correctAnswers[5]) {
    score++;
  }
}

// Sets up the flow of the game. Makes a question appear after the previous was submitted
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
  // Records an answer after submit button is clicked.
  $('.submit').click(function(e) {
    e.preventDefault();
    const radios = $('input');
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        // This is where I'm pushing which radiobutton was checked into guessedAnswers array
        guessedAnswers.push(radios[i].value);
      }
    }
    // adds to counter to determine the end of the game.
    cnt += 1;
    // empties the radio buttons so the answers don't compile
    $('.radioButtons').empty();
    nextQuest();
  });
});

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
