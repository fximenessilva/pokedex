import { useReducer, ChangeEvent } from 'react';

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

export function useFilterState(): UseFilterState {
  const [filterState, dispatch] = useReducer(filterReducer, filterInitialState);

  const setSearchTerm = (event: ChangeEvent) => {
    const inputValue = (event.target as HTMLInputElement).value;
    dispatch({ type: 'SET_SEARCHTERM', payload: inputValue });
  };

  const setFiltersToInitial = () =>
    dispatch({ type: 'SET_FILTERS_TO_INITIAL' });

  return { filterState, setSearchTerm };
}
