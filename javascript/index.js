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
  printMilliseconds();
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
  let centiseconds = chronometer.computeTwoDigitNumber(chronometer.getMilis());
  milDecElement.innerHTML = centiseconds[0];
  milUniElement.innerHTML = centiseconds[1];
}

function printSplit() {
  splitsElement.innerHTML += `<li class="list-item">${chronometer.split()}</li>`;
}

function clearSplits() {
  chronometer.reset();
  printTime;
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRightElement.className = 'btn split';
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  btnRightElement.className = 'btn reset';
  btnRightElement.innerHTML = 'RESET';
}
// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.className === 'btn start') {
    setStopBtn();
    setSplitBtn();
    chronometer.start();
    chronometer.start(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});



// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.className === 'btn split') {
    printSplit();
  } else {
    clearSplits();
  }
});

