import { Avengers } from "./context/Avengers.subject";
import { Ironman } from "./observers";
import { Hulk } from "./observers";
import { Thor } from "./observers";

export function observer() {
  const avengers = new Avengers();
  const ironman = new Ironman();
  const hulk = new Hulk();
  const thor = new Thor();

  avengers.add(ironman);
  avengers.add(hulk);
  avengers.add(thor);

  avengers.notifyAll("Thanos attack");

  avengers.remove(ironman);

  avengers.notifyAll("Death of Ironman");
}
