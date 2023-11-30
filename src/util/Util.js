import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

const Util = {
  validateNumber(answer) {
    const NOT_NUMBER = /[^0-9]/;

    if (NOT_NUMBER.test(answer)) {
      throw new Error(MESSAGE.error.notNumber);
    }
  },

  validateRange(number) {
    const { start, end } = VALUE.standard;

    if (number < start || number > end) {
      throw new Error(MESSAGE.error.range);
    }
  },

  convertToArray(answer) {
    return answer.split(',').map((numberString) => Number(numberString));
  },
};

export default Util;
