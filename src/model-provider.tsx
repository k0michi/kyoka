import * as React from 'react';
import ModelContext from './model-context';

export interface ModelProviderProps {
  model: any;
  children: React.ReactNode;
}

const ModelProvider = (props: ModelProviderProps) => <ModelContext.Provider value={props.model}>{props.children}</ModelContext.Provider>;

export default ModelProvider;