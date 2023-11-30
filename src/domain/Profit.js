import VALUE from '../constants/value.js';

class Profit {
  #profit = 0;

  constructor(details) {
    this.#getProfit(details);
  }

  #getProfit(details) {
    VALUE.details.forEach((detailInfo) => {
      const [detailKey, amount] = detailInfo;
      const number = details.get(detailKey);

      if (number > 0) {
        this.#profit += amount * number;
      }
    });
  }

  calculateRate(price) {
    const { percent, decimalPoint } = VALUE.standard;
    const rate = (this.#profit / price) * percent;

    return rate.toFixed(decimalPoint).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

export default Profit;
