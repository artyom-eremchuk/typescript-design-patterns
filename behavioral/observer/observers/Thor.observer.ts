import { Observer } from "../interfaces";

export class Thor implements Observer {
  notify(message: string): void {
    console.log(`Thor received the message about ${message}`);
  }
}
