import Util from '../util/Util.js';
import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate();
  }

  #validate() {
    this.#validateLength();
    this.#validateDuplication();

    this.#numbers.forEach((number) => {
      Lotto.#validateNumber(number);
      Util.validateRange(number);
    });
  }

  // TODO: 추가 기능 구현
  #validateLength() {
    if (this.#numbers.length !== VALUE.range.length) {
      throw new Error(MESSAGE.error.length);
    }
  }

  #validateDuplication() {
    const numbersSet = new Set([...this.#numbers]);

    if (numbersSet.size !== VALUE.range.length) {
      throw new Error(MESSAGE.error.duplication);
    }
  }

  static #validateNumber(number) {
    if (!Number.isSafeInteger(number)) {
      throw new Error(MESSAGE.error.notNumber);
    }
  }

  getWinnings() {
    return this.#numbers;
  }
}

export default Lotto;
