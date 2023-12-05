import Util from '../util/Util.js';
import MESSAGE from '../constants/message.js';

class Purchase {
  static #PRICE_UNIT = 1000;

  #price;

  constructor(answer) {
    this.#price = Number(answer);
    this.#validate(answer);
  }

  #validate(answer) {
    Util.validateNumber(answer);
    this.#validateUnit();
  }

  #validateUnit() {
    if (!this.#price || this.#price % Purchase.#PRICE_UNIT > 0) {
      throw new Error(MESSAGE.error.notPurchaseUnit);
    }
  }
}

export default Purchase;
