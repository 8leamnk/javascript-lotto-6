import WinningDetails from '../../src/domain/WinningDetails';

describe('당첨 내역 테스트', () => {
  test('구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역을 계산한다.', () => {
    // given
    const issued = [
      [1, 2, 3, 4, 5, 6],
      [2, 4, 5, 7, 10, 12],
    ];
    const lotto = [1, 2, 4, 5, 10, 12];
    const BONUS = 7;
    const OUTPUT = new Map([
      ['3개 일치 (5,000원)', 0],
      ['4개 일치 (50,000원)', 1],
      ['5개 일치 (1,500,000원)', 0],
      ['5개 일치, 보너스 볼 일치 (30,000,000원)', 1],
      ['6개 일치 (2,000,000,000원)', 0],
    ]);

    // when
    const details = new WinningDetails(issued, lotto, BONUS).getDetails();

    // then
    expect(details).toEqual(OUTPUT);
  });
});
