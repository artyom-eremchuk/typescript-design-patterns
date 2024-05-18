import { Subject } from "../interfaces";
import { Observer } from "../interfaces";

export class Avengers implements Subject {
  private superheroes: Observer[] = [];

  public add(superhero: Observer): void {
    this.superheroes.push(superhero);
  }

  public remove(superhero: Observer): void {
    const index = this.superheroes.indexOf(superhero);

    if (index !== -1) {
      this.superheroes.splice(index, 1);
    }
  }

  public notifyAll(message: string): void {
    this.superheroes.forEach((superhero) => superhero.notify(message));
  }
}
