import { Costume } from "../interfaces";

export class Cape implements Costume {
  don(): void {
    console.log("The cape provides multi-functional protection");
  }
}

export class Mask implements Costume {
  don(): void {
    console.log("SuperHero Mask is hidden face");
  }
}

export class PowerArmor implements Costume {
  don(): void {
    console.log("Technological suit gives super strength");
  }
}
