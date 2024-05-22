import { ISuperHero } from "../interfaces/ISuperHero.interface";

export abstract class Decorator implements ISuperHero {
  constructor(protected superHero: ISuperHero) {}

  abstract power(): number;
  abstract speak(phrase: string): string;
}
