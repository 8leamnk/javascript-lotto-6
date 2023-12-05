import Bonus from '../../src/domain/Bonus.js';

describe('보너스 번호 테스트', () => {
  test('숫자가 아닌 값이 들어가면 예외가 발생한다.', () => {
    // given
    const INPUT = 'e';

    // then
    expect(() => {
      const bonus = new Bonus(INPUT);
      return bonus;
    }).toThrow('[ERROR]');
  });

  test('1 ~ 45까지의 숫자가 아닌 값이 들어가면 예외가 발생한다.', () => {
    // given
    const INPUT = '46';

    // then
    expect(() => {
      const bonus = new Bonus(INPUT);
      return bonus;
    }).toThrow('[ERROR]');
  });

  test('당첨 번호의 값이 들어가면 예외가 발생한다.', () => {
    // given
    const INPUT = '7';
    const WINNINGS = [1, 2, 3, 4, 5, 7];

    // then
    expect(() => {
      const bonus = new Bonus(INPUT, WINNINGS);
      return bonus;
    }).toThrow('[ERROR]');
  });
});
