import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const outputs = {
  printNumberOfLotto(number) {
    Console.print(`${number}${MESSAGE.output.numberOfLotto}\n`);
  },
  printRandoms(random) {
    const output = random.join('');
    Console.print(output);
  },
};

export default outputs;
