import Purchase from './domain/Purchase.js';
import Issued from './domain/Issued.js';
import Lotto from './domain/Lotto.js';
import Bonus from './domain/Bonus.js';
import WinningDetails from './domain/WinningDetails.js';
import Profit from './domain/Profit.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Util from './util/Util.js';

class App {
  async play() {
    const { price, numberOfPurchase } = await this.#executePurchase();
    const issued = new Issued(numberOfPurchase).getIssued();

    OutputView.printNumberOfPurchase(numberOfPurchase);
    OutputView.printIssued(issued);

    const lotto = await this.#executeLotto();
    const bonus = await this.#executeBonus(lotto);

    App.#endGame(price, issued, lotto, bonus);
  }

  async #executePurchase() {
    try {
      const answer = await InputView.readPurchase();
      const purchaseInfo = new Purchase(answer);

      return purchaseInfo.getPurchaseInfo();
    } catch (error) {
      OutputView.printError(error);
      return this.#executePurchase();
    }
  }

  async #executeLotto() {
    try {
      const answer = await InputView.readLotto();
      const numbers = Util.convertToArray(answer);
      const lotto = new Lotto(numbers).getLotto();

      return lotto;
    } catch (error) {
      OutputView.printError(error);
      return this.#executeLotto();
    }
  }

  async #executeBonus(lotto) {
    try {
      const answer = await InputView.readBonus();
      const bonus = new Bonus(answer, lotto).getBonus();

      return bonus;
    } catch (error) {
      OutputView.printError(error);
      return this.#executeBonus(lotto);
    }
  }

  static #endGame(price, issued, lotto, bonus) {
    const details = new WinningDetails(issued, lotto, bonus).getDetails();
    const rate = new Profit(details).calculateRate(price);

    OutputView.printDetails(details);
    OutputView.printRate(rate);
  }
}

export default App;
