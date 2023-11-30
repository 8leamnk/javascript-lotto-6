import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

const OutputView = {
  printError(error) {
    Console.print(error.message);
  },

  printNumberOfPurchase(numberOfPurchase) {
    Console.print(`\n${numberOfPurchase}${MESSAGE.output.price}`);
  },

  printIssued(issued) {
    issued.forEach((numbers) => {
      Console.print(`[${numbers.join(', ')}]`);
    });
  },

  printDetails(details) {
    Console.print(MESSAGE.output.details);

    details.forEach((number, detailKey) => {
      Console.print(`${detailKey} - ${number}${VALUE.unit.number}`);
    });
  },

  printRate(rate) {
    const { totalRate, ending } = MESSAGE.output;

    Console.print(`${totalRate} ${rate}${VALUE.unit.percent}${ending}`);
  },
};

export default OutputView;
