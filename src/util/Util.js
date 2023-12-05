import MESSAGE from '../constants/message.js';

const Util = {
  validateNumber(answer) {
    const NOT_NUMBER = /[^0-9]/;

    if (NOT_NUMBER.test(answer)) {
      throw new Error(MESSAGE.error.notNumber);
    }
  },

  validateRange(number) {
    const START = 1;
    const END = 45;

    if (number < START || number > END) {
      throw new Error(MESSAGE.error.range);
    }
  },

  convertToNumberArray(answer) {
    return answer.split(',').map((string) => Number(string));
  },
};

export default Util;
