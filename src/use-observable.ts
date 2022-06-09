import * as React from 'react';
import Observable from './observable';
import { getSnapShotValue } from './snap-shot';

export default function useObservable<T>(observable: Observable<T>): T {
  return getSnapShotValue(React.useSyncExternalStore(
    observable.subscribe.bind(observable),
    observable.getSnapShot.bind(observable)
  ));
}