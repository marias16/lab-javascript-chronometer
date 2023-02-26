class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null;
  }

  start(callback) {
    if (callback) {
      return setInterval(callback, 1000)
    } else {
      return this.intervalId = setInterval(() => this.currentTime++, 1000)
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    if(this.currentTime <=59) {
      return this.currentTime;
    }
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    const numString = value.toString();
    if(numString.length >= 2) {
      return numString
    } 
    return '0' + numString;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())} : ${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
