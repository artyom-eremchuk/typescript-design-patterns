import { SuperHero } from "./context";
import {
  TechnologicalInterface,
  WallCrawling,
  Flight,
  PowerArmor,
  Cape,
  Mask,
} from "./strategies";

export function strategy() {
  const superman = new SuperHero(new Flight(), new Cape());
  superman.donCostume();
  superman.applySuperPower();

  const spiderman = new SuperHero(new WallCrawling(), new Mask());
  spiderman.donCostume();
  spiderman.applySuperPower();

  const ironman = new SuperHero(new TechnologicalInterface(), new PowerArmor());
  ironman.donCostume();
  ironman.applySuperPower();
}
