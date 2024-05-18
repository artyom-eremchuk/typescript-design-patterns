import { Observer } from "./Observer.interface";

export interface Subject {
  add(observer: Observer): void;
  remove(observer: Observer): void;
  notifyAll(message: string): void;
}
