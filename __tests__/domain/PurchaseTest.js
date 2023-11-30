import Purchase from '../../src/domain/Purchase.js';

describe('구입 클래스 테스트', () => {
  test('숫자가 아닌 값을 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = '2e000';

    // then
    expect(() => {
      const purchase = new Purchase(INPUT);
      return purchase;
    }).toThrow('[ERROR]');
  });

  test.each([['12500'], ['0000']])(
    '구입 금액이 1,000원 단위가 아니면 예외가 발생한다.',
    (input) => {
      expect(() => {
        const purchase = new Purchase(input);
        return purchase;
      }).toThrow('[ERROR]');
    },
  );

  test('구매한 로또 개수는 구매 금액을 1,000원으로 나눈 값이다.', () => {
    // given
    const INPUT = '7000';
    const OUTPUT = 7;

    // when
    const { numberOfPurchase } = new Purchase(INPUT).getPurchaseInfo();

    // then
    expect(numberOfPurchase).toBe(OUTPUT);
  });
});
