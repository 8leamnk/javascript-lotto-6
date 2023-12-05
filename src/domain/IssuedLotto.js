import { Random } from '@woowacourse/mission-utils';
import VALUE from '../constants/value.js';

class IssuedLotto {
  #issuedLotto = [];

  constructor(number) {
    this.#setOneOfLotto(number);
  }

  #setOneOfLotto(number) {
    const { start, end, length } = VALUE.range;

    for (let count = 0; count < number; count += 1) {
      const lotto = Random.pickUniqueNumbersInRange(start, end, length);

      lotto.sort((a, b) => a - b);
      this.#issuedLotto.push(lotto);
    }
  }

  getIssuedLotto() {
    return this.#issuedLotto;
  }
}

export default IssuedLotto;
