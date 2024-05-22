import { Decorator } from "./Abstract.decorator";

export class Batmobile extends Decorator {
  power(): number {
    return this.superHero.power() + 50;
  }

  speak(phrase: string): string {
    return `${this.superHero.speak(phrase)}, Batmobile`;
  }
}
