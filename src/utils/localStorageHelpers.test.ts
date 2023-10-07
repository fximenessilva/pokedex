const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

import { getter, setter, remover } from './localStorageHelpers';

describe('localStorageUtils', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('should set and get an item from localStorage', () => {
    const key = 'testKey';
    const value = { testValue: '123' };

    setter(key, value);

    const retrievedValue = getter(key);

    expect(retrievedValue).toEqual(value);
  });

  it('should return null when getting a non-existent item', () => {
    const key = 'nonExistentKey';

    const retrievedValue = getter(key);

    expect(retrievedValue).toBeNull();
  });

  it('should remove an item from localStorage', () => {
    const key = 'testKey';
    const value = { testValue: '123' };

    setter(key, value);

    remover(key);

    const retrievedValue = getter(key);

    expect(retrievedValue).toBeNull();
  });
});
