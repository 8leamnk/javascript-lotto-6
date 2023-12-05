import Purchase from '../../src/domain/Purchase.js';

describe('구입 금액 테스트', () => {
  test('숫자가 아닌 값이 들어가면 예외가 발생한다.', () => {
    // given
    const INPUT = 'e000';

    // then
    expect(() => {
      const purchase = new Purchase(INPUT);
      return purchase;
    }).toThrow('[ERROR]');
  });

  test('1000으로 나누어 떨어지지 않는 값이 들어가면 예외가 발생한다.', () => {
    // given
    const INPUT = '12500';

    // then
    expect(() => {
      const purchase = new Purchase(INPUT);
      return purchase;
    }).toThrow('[ERROR]');
  });
});
