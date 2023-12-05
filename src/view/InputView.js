import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readPurchase() {
    const answer = await Console.readLineAsync(MESSAGE.input.purchase);

    return answer;
  },

  async readWinnings() {
    const answer = await Console.readLineAsync(MESSAGE.input.winnings);

    return answer;
  },

  async readBonus() {
    const answer = await Console.readLineAsync(MESSAGE.input.bonus);

    return answer;
  },
};

export default InputView;
