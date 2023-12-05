import Compare from '../../src/domain/Compare.js';

describe('당첨 통계 테스트', () => {
  test('사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역을 구한다.', () => {
    // given
    const LOTTO = [
      [1, 2, 3, 4, 5, 6],
      [2, 4, 6, 8, 10, 12],
      [1, 2, 3, 4, 5, 7],
    ];
    const WINNING = [1, 2, 3, 4, 5, 6];
    const BONUS = 7;
    const OUTPUT = new Map([
      ['3개 일치 (5,000원)', 1],
      ['4개 일치 (50,000원)', 0],
      ['5개 일치 (1,500,000원)', 0],
      ['5개 일치, 보너스 볼 일치 (30,000,000원)', 1],
      ['6개 일치 (2,000,000,000원)', 1],
    ]);

    // when
    const details = new Compare(LOTTO, WINNING, BONUS).getDetails();

    // then
    expect(details).toEqual(OUTPUT);
  });
});
