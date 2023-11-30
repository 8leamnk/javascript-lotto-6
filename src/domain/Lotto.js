import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validate(numbers);
  }

  #validate() {
    this.#numbers.forEach((number) => {
      Lotto.#validateNumber(number);
      Lotto.#validateRange(number);
      this.#validateDuplication(number);
    });

    this.#validateLength();
  }

  // TODO: 추가 기능 구현
  static #validateNumber(number) {
    if (!Number.isSafeInteger(number)) {
      throw new Error(MESSAGE.error.notNumber);
    }
  }

  static #validateRange(number) {
    const { rangeStart, rangeEnd } = VALUE.standard;

    if (number < rangeStart || number > rangeEnd) {
      throw new Error(MESSAGE.error.range);
    }
  }

  #validateDuplication(number) {
    const firstIndex = this.#numbers.indexOf(number);
    const lastIndex = this.#numbers.lastIndexOf(number);

    if (firstIndex !== lastIndex) {
      throw new Error(MESSAGE.error.duplication);
    }
  }

  #validateLength() {
    if (this.#numbers.length !== VALUE.standard.lotto) {
      throw new Error(MESSAGE.error.lottoLength);
    }
  }

  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
