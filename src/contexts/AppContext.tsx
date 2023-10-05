import React, {
  createContext,
  useReducer,
  useContext,
  Dispatch,
  useEffect,
} from 'react';

import { NAMESPACES } from '../utlils/constants';
import { getter, setter } from '../utlils/localStorageHelpers';

type State = {
  isDarkMode: boolean;
};

type Action = { type: 'SET_DARK_MODE'; payload: boolean };

const THEME_SELECTED = getter(NAMESPACES.theme);

const initialState: State = {
  isDarkMode: THEME_SELECTED || false,
};

const AppContext = createContext<
  | {
      state: State;
      dispatch: Dispatch<Action>;
      toggleDarkMode: (payload: any) => void;
    }
  | undefined
>(undefined);

const appReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_DARK_MODE':
      return { ...state, isDarkMode: action.payload };
    default:
      return state;
  }
};

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    if (!THEME_SELECTED) {
      setter(NAMESPACES.theme, state.isDarkMode);
    }
  }, []);

  const toggleDarkMode = (payload: any) => {
    dispatch({ type: 'SET_DARK_MODE', payload });
    setter(NAMESPACES.theme, payload);
  };

  return (
    <AppContext.Provider value={{ state, dispatch, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
