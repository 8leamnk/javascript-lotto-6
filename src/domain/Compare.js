class Compare {
  static #BONUS = 'bonus';

  static #DETAILS_INFO = new Map([
    ['3', ['3개 일치 (5,000원)', 5000]],
    ['4', ['4개 일치 (50,000원)', 50000]],
    ['5', ['5개 일치 (1,500,000원)', 1500000]],
    ['bonus', ['5개 일치, 보너스 볼 일치 (30,000,000원)', 30000000]],
    ['6', ['6개 일치 (2,000,000,000원)', 2000000000]],
  ]);

  #details = new Map();

  constructor(lotto, winning, bonus) {
    this.#init();
    this.#compare(lotto, winning, bonus);
  }

  #init() {
    Compare.#DETAILS_INFO.forEach(([key]) => {
      this.#details.set(key, 0);
    });
  }

  static #getMatchedCount(winning, numbers) {
    let matchedCount = 0;

    numbers.forEach((number) => {
      if (winning.indexOf(number) >= 0) {
        matchedCount += 1;
      }
    });

    return matchedCount;
  }

  #setDetails(infoKey) {
    const [key] = Compare.#DETAILS_INFO.get(infoKey);
    const count = this.#details.get(key);

    this.#details.set(key, count + 1);
  }

  #compareOne(numbers, winning, bonus) {
    const matchedCount = Compare.#getMatchedCount(winning, numbers);

    if (matchedCount === 5 && numbers.indexOf(bonus) >= 0) {
      this.#setDetails(Compare.#BONUS);
    } else if (matchedCount >= 3) {
      this.#setDetails(`${matchedCount}`);
    }
  }

  #compare(lotto, winning, bonus) {
    lotto.forEach((numbers) => {
      this.#compareOne(numbers, winning, bonus);
    });
  }

  getDetails() {
    return this.#details;
  }
}

export default Compare;
