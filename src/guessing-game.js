class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.min = min
      this.max = max
      this.result = 0
    }
    guess() {
      this.result = this.min + Math.round((this.max - this.min)/2)
      return this.result
    }

    lower() {
      this.setRange(this.min, this.result)
    }

    greater() {
      this.setRange(this.result, this.max)
    }
}

module.exports = GuessingGame;
