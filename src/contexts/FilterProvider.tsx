import { createContext, useContext, useReducer, ChangeEvent } from 'react';

interface FilterState {
  searchTerm: string;
}

interface UseFilterState {
  filterState: FilterState;
  setSearchTerm: (event: ChangeEvent<HTMLInputElement>) => void;
}

type FilterAction =
  | { type: 'SET_SEARCHTERM'; payload: string }
  | { type: 'SET_FILTERS_TO_INITIAL' };

const filterReducer = (
  state: FilterState,
  action: FilterAction
): FilterState => {
  switch (action.type) {
    case 'SET_SEARCHTERM':
      return {
        ...state,
        searchTerm: action.payload,
      };

    case 'SET_FILTERS_TO_INITIAL':
      return {
        ...filterInitialState,
      };
    default:
      return state;
  }
};

const filterInitialState = {
  searchTerm: '',
};

const FilterContext = createContext<UseFilterState | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [filterState, dispatch] = useReducer(filterReducer, filterInitialState);

  const setSearchTerm = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    dispatch({ type: 'SET_SEARCHTERM', payload: inputValue });
  };

  const setFiltersToInitial = () =>
    dispatch({ type: 'SET_FILTERS_TO_INITIAL' });

  const contextValue = { filterState, setSearchTerm };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterState() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilterState must be used within a FilterProvider');
  }
  return context;
}
