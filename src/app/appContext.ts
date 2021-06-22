import React from 'react';
import { TFunction1 } from './lib/functionTypes';

interface AppContext {
  setPopupVisible: TFunction1<boolean>;
}

export const AppContext = React.createContext<AppContext>({
  setPopupVisible: () => {
    // empty
  },
});
