

// const capitalQuestions = [
//     {question:"<h2>What is the state capital of Alabama?</h2>",
//     answers: ["Juneau","Indianapolis","Montgomery","Olympia"],
//     answerKey: "Montgomery",
//     questionTime: 100//     },


const questionsArr = [
  {
    question: 'What is the capital of Alabama?',
    answers: ['Montgomery', 'Phoenix', 'Richmond', 'Springfield'],
    correct: 0,
  }, {
    question: 'What is the capital of North Carolina?',
    answers: ['Clinton', 'Jacksonville', 'Greensboro', 'Raleigh'],
    correct: 3,
  }, {
    question: 'What is the capital of Alaska?',
    answers: ['Juneau', 'Olympia', 'Little Rock', 'Austin'],
    correct: 0,
  }, {
    question: 'What is the capital of Arkansas?',
    answers: ['Columbia', 'Little Rock', 'Harrisburg', 'Atlanta'],
    correct: 1,
  }, {
    question: 'What is the capital of Arizona?',
    answers: ['Charleston', 'Montpelier', 'St. Paul', 'Phoenix'],
    correct: 3,
  }, {
    question: 'What is the capital of Minnesota?',
    answers: ['Santa Fe', 'Bismark', 'St. Paul', 'Lansing'],
    correct: 2,
  },
];


let cnt = 0;
let nextQuest;
const playing = false;
let beginButton;

function startGame() {
  nextQuest();
}

$(document).ready(function() {
  $('#startQuiz').click(function() {
    startGame();
  });
});

$(function() {
  nextQuest = function() {
    $('.question-title').text(questionsArr[cnt].question);
    const answers = questionsArr[cnt].answers;
    for (let i = 0; i < answers.length; i++) {
      $('.radioButtons').prepend(`<input type='radio' name='choices' value=${i} />${answers[i]}<br/>`);
      // reset the radio buttons here
    }
  };

  $('.submit').click(function(e) {
    e.preventDefault();
    const radios = $('input');
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        console.log(radios[i].value);
      }
    }

    cnt += 1;
    $('.radioButtons').empty();
    nextQuest();
  });
});

// const timeOutFunction = setInterval(function() {
//   console.log('This is a second interval');
// }, 1000);

// setTimeout(function() {
//   clearInterval(timeOutFunction);
// }, 5000);

// timeOutFunction();

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

// const correct = 0;
// const incorrect = 0;
// const playerAnswer = [];
// const totalSeconds = 10;

// const chosenState = statesArray[Math.floor(Math.random() * statesArray.length)];
// // document.body.innerHTML = chosenState;
// console.log(`What is the State Capital of ${chosenState}?`);
// $('.question').append(`What is the State Capital of ${chosenState}?`);

// // Not sure if this is the way to go, but I'm trying to take chosenState and move it to the doe

// $('.question').append('<div style="color: white">'chosenState()'</\'div>');
