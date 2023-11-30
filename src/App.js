import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  async play() {
    const price = await this.#executePurchase();
    const lotto = await this.#executeLotto();
    const bonus = await this.#executeBonus();
  }

  async #executePurchase() {
    try {
      const answer = await InputView.readPurchase();

      return answer;
    } catch (error) {
      OutputView.printError(error);
      return this.#executePurchase();
    }
  }

  async #executeLotto() {
    try {
      const answer = await InputView.readLotto();

      return answer;
    } catch (error) {
      OutputView.printError(error);
      return this.#executeLotto();
    }
  }

  async #executeBonus() {
    try {
      const answer = await InputView.readBonus();

      return answer;
    } catch (error) {
      OutputView.printError(error);
      return this.#executeBonus();
    }
  }
}

export default App;
