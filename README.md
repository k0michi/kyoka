# Kyōka

Kyoka is a minimalistic state management library, designed for React.

## Features
- No boilerplate
- Zero dependency
- Straightforward
- Lightweight
- Object-oriented
- Written in TypeScript

## Installation

```bash
# npm
npm install kyoka
# Yarn
yarn add kyoka
```

## Example

```tsx
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ModelProvider, Observable, useModel, useObservable } from 'kyoka';

class Model {
  count = new Observable(0);

  addCount() {
    this.count.set(this.count.get() + 1);
  }
}

function Counter() {
  const model = useModel<Model>();
  const value = useObservable(model.count);

  return (
    <>
      {value}{' '}<button onClick={model.addCount.bind(model)}>Add count</button>
    </>
  );
}

const model = new Model();
const root = ReactDOM.createRoot(document.getElementById('app')!);

root.render(
  <ModelProvider model={model}>
    <Counter />
  </ModelProvider>
);
```