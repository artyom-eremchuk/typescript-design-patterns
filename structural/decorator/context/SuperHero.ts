import { ISuperHero } from "../interfaces/ISuperHero.interface";

export class SuperHero implements ISuperHero {
  power(): number {
    return 100;
  }
  speak(phrase: string): string {
    return `I'm ${phrase}. I Have SuperPower`;
  }
}
