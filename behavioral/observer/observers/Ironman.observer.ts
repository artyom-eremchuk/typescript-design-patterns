import { Observer } from "../interfaces";

export class Ironman implements Observer {
  notify(message: string): void {
    console.log(`Ironman received the message about ${message}`);
  }
}
