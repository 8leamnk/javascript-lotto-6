import VALUE from '../constants/value.js';

class Compare {
  static #BONUS = 'bonus';

  #details = new Map();

  constructor(lotto, winnings, bonus) {
    this.#init();
    this.#compare(lotto, winnings, bonus);
  }

  #init() {
    VALUE.detailsInfo.forEach(([key]) => {
      this.#details.set(key, 0);
    });
  }

  static #getMatchedCount(winnings, numbers) {
    let matchedCount = 0;

    numbers.forEach((number) => {
      if (winnings.indexOf(number) >= 0) {
        matchedCount += 1;
      }
    });

    return matchedCount;
  }

  #setDetails(infoKey) {
    const [key] = VALUE.detailsInfo.get(infoKey);
    const count = this.#details.get(key);

    this.#details.set(key, count + 1);
  }

  #compareOne(numbers, winnings, bonus) {
    const matchedCount = Compare.#getMatchedCount(winnings, numbers);

    if (matchedCount === 5 && numbers.indexOf(bonus) >= 0) {
      this.#setDetails(Compare.#BONUS);
    } else if (matchedCount >= 3) {
      this.#setDetails(`${matchedCount}`);
    }
  }

  #compare(lotto, winnings, bonus) {
    lotto.forEach((numbers) => {
      this.#compareOne(numbers, winnings, bonus);
    });
  }

  getDetails() {
    return this.#details;
  }
}

export default Compare;
