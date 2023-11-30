import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readPurchase() {
    const answer = await Console.readLineAsync(MESSAGE.input.purchase);

    return answer;
  },
  async readLotto() {
    const answer = await Console.readLineAsync(MESSAGE.input.lotto);

    return answer;
  },
  async readBonus() {
    const answer = await Console.readLineAsync(MESSAGE.input.bonus);

    return answer;
  },
};

export default InputView;
