import VALUE from '../constants/value';

class Profit {
  static #PERCENT_UNIT = 100;

  #profit = 0;

  constructor(details) {
    this.#calculateProfit(details);
  }

  #calculateProfit(details) {
    VALUE.detailsInfo.forEach(([detailsKey, amount]) => {
      const count = details.get(detailsKey);

      this.#profit += count * amount;
    });
  }

  calculateRate(price) {
    const rate = (this.#profit / price) * Profit.#PERCENT_UNIT;

    return rate;
  }
}

export default Profit;
