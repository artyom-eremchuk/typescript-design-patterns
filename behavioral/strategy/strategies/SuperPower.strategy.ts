import { SuperPower } from "../interfaces";

export class TechnologicalInterface implements SuperPower {
  apply(): void {
    console.log("Technological Interface Makes Hacking Super Easy");
  }
}

export class WallCrawling implements SuperPower {
  apply(): void {
    console.log("Wall-Crawling Turns any Structure Into a Jungle-Gym");
  }
}

export class Flight implements SuperPower {
  apply(): void {
    console.log("Flight is a Universal Dream Come True");
  }
}
