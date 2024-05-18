import { Observer } from "../interfaces";

export class Hulk implements Observer {
  notify(message: string): void {
    console.log(`Hulk received the message about ${message}`);
  }
}
