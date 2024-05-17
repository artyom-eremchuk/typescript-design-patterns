import { Costume, SuperPower } from "../interfaces";

export class SuperHero {
  private superPower: SuperPower;
  private costume: Costume;

  constructor(superPower: SuperPower, costume: Costume) {
    this.superPower = superPower;
    this.costume = costume;
  }

  donCostume() {
    this.costume.don();
  }

  applySuperPower() {
    this.superPower.apply();
  }
}
