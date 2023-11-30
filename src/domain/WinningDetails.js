import VALUE from '../constants/value.js';

class WinningDetails {
  #counts = [];

  #details = new Map();

  constructor(issued, lotto, bonus) {
    this.#compare(issued, lotto, bonus);
    this.#setWinningDetails();
  }

  #compare(issued, lotto, bonus) {
    issued.forEach((numbers) => {
      const count = WinningDetails.#findMatchedCount(numbers, lotto);
      this.#setMatchedCounts(count, numbers, bonus);
    });
  }

  static #findMatchedCount(numbers, lotto) {
    let count = 0;

    numbers.forEach((number) => {
      if (lotto.indexOf(number) >= 0) {
        count += 1;
      }
    });

    return count;
  }

  #setMatchedCounts(count, numbers, bonus) {
    if (count === VALUE.standard.bonus && numbers.indexOf(bonus) >= 0) {
      this.#counts.push(VALUE.unit.bonus);
    } else {
      this.#counts.push(`${count}`);
    }
  }

  #setWinningDetails() {
    VALUE.details.forEach((detailInfo, key) => {
      const detail = detailInfo.at(0);
      const number = this.#counts.filter((count) => count === key).length;

      this.#details.set(detail, number);
    });
  }

  getDetails() {
    return this.#details;
  }
}

export default WinningDetails;
