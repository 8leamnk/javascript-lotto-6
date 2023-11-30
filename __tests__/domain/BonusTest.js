import Bonus from '../../src/domain/Bonus.js';

describe('보너스 클래스 테스트', () => {
  test('숫자가 아닌 값을 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = 'e';

    // then
    expect(() => {
      const bonus = new Bonus(INPUT);
      return bonus;
    }).toThrow('[ERROR]');
  });

  test.each([['0'], ['46']])(
    '1부터 45까지의 숫자가 아니면 예외가 발생한다.',
    (input) => {
      expect(() => {
        const bonus = new Bonus(input);
        return bonus;
      }).toThrow('[ERROR]');
    },
  );

  test('당첨 번호에 있는 값을 입력하면 예외가 발생한다.', () => {
    // given
    const INPUT = '6';
    const LOTTO = [1, 2, 3, 4, 5, 6];

    // then
    expect(() => {
      const bonus = new Bonus(INPUT, LOTTO);
      return bonus;
    }).toThrow('[ERROR]');
  });
});
