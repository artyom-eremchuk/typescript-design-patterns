import { Decorator } from "./Abstract.decorator";

export class Batrope extends Decorator {
  power(): number {
    return this.superHero.power() + 10;
  }

  speak(phrase: string): string {
    return `${this.superHero.speak(phrase)}, Batrope`;
  }
}
