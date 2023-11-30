import Util from '../util/Util.js';
import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

class Purchase {
  #price = 0;

  constructor(answer) {
    this.#price = Number(answer);
    this.#validate(answer);
  }

  #validate(answer) {
    Util.validateNumber(answer);
    this.#validateFormat();
  }

  #validateFormat() {
    if (this.#price % VALUE.standard.price > 0) {
      throw new Error(MESSAGE.error.price);
    }
  }

  #getNumberOfPurchase() {
    return this.#price / VALUE.standard.price;
  }

  getPurchaseInfo() {
    const numberOfPurchase = this.#getNumberOfPurchase();

    return { price: this.#price, numberOfPurchase };
  }
}

export default Purchase;
