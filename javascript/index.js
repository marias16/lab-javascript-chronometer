const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');


function printTime() {
  printMinutes();
  printSeconds();
}


function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
}


function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}
// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.className === 'btn start') {
    btnLeftElement.className = 'btn stop';
    btnLeftElement.innerHTML = 'STOP';
    btnRightElement.className = 'btn split';
    btnRightElement.innerHTML = 'SPLIT';
    chronometer.start();
    chronometer.start(printTime);
  } else {
    btnLeftElement.className = 'btn start';
    btnLeftElement.innerHTML = 'START';
    btnRightElement.className = 'btn reset';
    btnRightElement.innerHTML = 'RESET';
    chronometer.stop();
  }
});



// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className = 'btn split') {
    splitsElement.innerHTML += `<li class="list-item">${chronometer.computeTwoDigitNumber(chronometer.getMinutes())}:${chronometer.computeTwoDigitNumber(chronometer.getSeconds())}</li>`;
  }
});

