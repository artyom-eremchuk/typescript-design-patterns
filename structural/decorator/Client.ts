import { SuperHero } from "./context";
import { Batrope } from "./decorators/Batrope.decorator";
import { Batmobile } from "./decorators/Batmobile.decorator";

export function decorator() {
  let batman = new SuperHero();
  batman = new Batrope(batman);
  batman = new Batmobile(batman);

  console.log(batman.speak("Batman"));
  console.log(`My SuperPower - ${batman.power()}%`);
}
