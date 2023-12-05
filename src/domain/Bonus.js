import Util from '../util/Util.js';
import MESSAGE from '../constants/message.js';

class Bonus {
  #bonus;

  constructor(answer, winnings) {
    this.#bonus = Number(answer);
    this.#validate(answer, winnings);
  }

  #validate(answer, winnings) {
    Util.validateNumber(answer);
    Util.validateRange(this.#bonus);
    this.#validateDuplication(winnings);
  }

  #validateDuplication(winnings) {
    if (winnings.includes(this.#bonus)) {
      throw new Error(MESSAGE.error.duplication);
    }
  }

  getBonus() {
    return this.#bonus;
  }
}

export default Bonus;
