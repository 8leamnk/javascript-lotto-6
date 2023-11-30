import { Random } from '@woowacourse/mission-utils';
import VALUE from '../constants/value.js';

class Issued {
  #issued = [];

  constructor(numberOfPurchase) {
    this.#setIssued(numberOfPurchase);
  }

  #setIssued(numberOfPurchase) {
    for (let i = 0; i < numberOfPurchase; i += 1) {
      const { start, end, lotto } = VALUE.standard;
      const numbers = Random.pickUniqueNumbersInRange(start, end, lotto);

      this.#issued(numbers.sort((a, b) => a - b));
    }
  }

  getIssued() {
    return this.#issued;
  }
}

export default Issued;
