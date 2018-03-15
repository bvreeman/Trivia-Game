'use strict';

const capitalQuestions = [
    {question:"<h2>What is the state capital of Alabama?</h2>",
    answers: ["Juneau","Indianapolis","Montgomery","Olympia"],
    answerKey: "Montgomery",
    questionTime: 100
    },

const statesArray = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
  'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebrasa', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
  'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

const capitalArray = ['Montgomery', 'Juneau', 'Phoenix', 'Little Rock',
  'Sacramento', 'Denver', 'Hartford', 'Dover', 'Tallahassee',
  'Atlanta', 'Honolulu', 'Boise', 'Springfield', 'Indianapolis',
  'Des Moines', 'Topeka', 'Frankfort', 'Baton Rouge', 'Augusta',
  'Annapolis', 'Boston', 'Lansing', 'St. Paul', 'Jackson', 'Jefferson City',
  'Helena', 'Lincoln', 'Carson City', 'Concord', 'Trenton', 'Santa Fe',
  'Albany', 'Raleigh', 'Bismark', 'Columbus', 'Oklahoma City', 'Salem',
  'Harrisburg', 'Providence', 'Columbia', 'Pierre', 'Nashville', 'Austin',
  'Salt Lake City', 'Montpelier', 'Richmond', 'Olympia', 'Charleston',
  'Madison', 'Cheyenne'];

// const correct = 0;
// const incorrect = 0;
// const playerAnswer = [];
// const totalSeconds = 10;
// const questionNumber = 0;

const chosenState = statesArray[Math.floor(Math.random() * statesArray.length)];
// document.body.innerHTML = chosenState;
console.log(`What is the State Capital of ${chosenState}?`);
$('.question').append(`What is the State Capital of ${chosenState}?`);

// Not sure if this is the way to go, but I'm trying to take chosenState and move it to the doe

// $('.question').append('<div style="color: white">'chosenState()'</\'div>');
