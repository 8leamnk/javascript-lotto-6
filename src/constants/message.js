const MESSAGE = {
  input: {
    price: '구입금액을 입력해 주세요.\n',
    lotto: '당첨 번호를 입력해 주세요.\n',
    bonus: '보너스 번호를 입력해 주세요.\n',
  },
  output: {
    numberOfLotto: '개를 구매했습니다.\n',
  },
  error: {
    notNumber: '[ERROR] 숫자가 아닌 값이 입력되었습니다.',
    priceUnit: '[ERROR] 1,000원 단위의 숫자를 입력해주세요.',
    duplicateNumber: '[ERROR] 중복된 숫자가 있습니다.',
    lottoLength: '[ERROR] 로또 번호는 6개여야 합니다.',
    rangeLotto: '[ERROR] 1부터 45까지의 숫자들을 입력해주세요.',
  },
};

Object.freeze(MESSAGE.input);
Object.freeze(MESSAGE.output);
Object.freeze(MESSAGE.error);
Object.freeze(MESSAGE);

export default MESSAGE;
