export interface ObjectWrapper<T> {
  value: T;
}

export type SnapShot<T> = T | ObjectWrapper<T>;

export function createSnapShot<T>(value: T): SnapShot<T> {
  if (typeof value === 'object') {
    return { value };
  }

  return value;
}

export function getSnapShotValue<T>(snapShot: SnapShot<T>): T {
  if (typeof snapShot === 'object') {
    return (snapShot as ObjectWrapper<T>).value;
  }

  return snapShot;
}