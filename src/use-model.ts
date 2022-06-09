import * as React from 'react';
import ModelContext from './model-context';

export default function useModel<T>(): T {
  const model = React.useContext<T>(ModelContext);
  return model;
}