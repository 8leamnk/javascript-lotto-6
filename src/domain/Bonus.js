import Util from '../util/Util.js';
import MESSAGE from '../constants/message.js';

class Bonus {
  #bonus;

  constructor(answer, lotto) {
    this.#bonus = Number(answer);
    this.#validate(answer, lotto);
  }

  #validate(answer, lotto) {
    Util.validateNumber(answer);
    Util.validateRange(this.#bonus);
    this.#validateDuplication(lotto);
  }

  #validateDuplication(lotto) {
    if (lotto.includes(this.#bonus)) {
      throw new Error(MESSAGE.error.bonus);
    }
  }

  getBonus() {
    return this.#bonus;
  }
}

export default Bonus;
