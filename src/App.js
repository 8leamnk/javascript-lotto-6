import InputView from './view/InputView';

class App {
  async play() {}

  async #executePurchase() {
    try {
      const answer = await InputView.readPurchase();

      return '';
    } catch (error) {
      return this.#executePurchase();
    }
  }

  async #executeWinnings() {
    try {
      const answer = await InputView.readWinnings();

      return '';
    } catch (error) {
      return this.#executeWinnings();
    }
  }

  async #executeBonus() {
    try {
      const answer = await InputView.readBonus();

      return '';
    } catch (error) {
      return this.#executeBonus();
    }
  }
}

export default App;
