import { createSnapShot, getSnapShotValue, SnapShot } from './snap-shot';

export default class Observable<T> {
  private snapShot: SnapShot<T>;
  private listeners:(() => void)[] = [];

  constructor(initialValue: T) {
    this.snapShot = createSnapShot(initialValue);
  }

  public get(): T {
    return getSnapShotValue(this.snapShot);
  }

  public getSnapShot(): SnapShot<T> {
    return this.snapShot;
  }

  public set(value: T) {
    this.snapShot = createSnapShot(value);
    this._update();
  }

  public subscribe(listener: () => void) {
    this.listeners.push(listener);

    return () => {
      this.listeners.splice(this.listeners.indexOf(listener), 1);
    }
  }

  private _update() {
    for (const listener of this.listeners) {
      listener();
    }
  }
}