class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null;
  }

  start(callback) {
    if (callback) {
      return setInterval(callback, 10)
    } else {
      return this.intervalId = setInterval(() => this.currentTime++, 10)
    }
  }

  getMilis() {
    if(this.currentTime < 100) {
      return this.currentTime;
    } else {
      return this.currentTime % 100;
    }
    
  }

  getMinutes() {
    return Math.floor(this.getSeconds()/60);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100)
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
    return `${this.computeTwoDigitNumber(this.getMinutes())} : ${this.computeTwoDigitNumber(this.getSeconds())} : ${this.computeTwoDigitNumber(this.getMilis())}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
