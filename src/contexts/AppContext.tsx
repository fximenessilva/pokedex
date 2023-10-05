import React, { createContext, useReducer, useContext, Dispatch } from 'react';
import styled from 'styled-components';

type State = {
  isDarkMode: boolean;
};

type Action = { type: 'SET_DARK_MODE'; payload: boolean };

const initialState: State = {
  isDarkMode: false,
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

  const toggleDarkMode = (payload: any) => {
    dispatch({ type: 'SET_DARK_MODE', payload });
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
