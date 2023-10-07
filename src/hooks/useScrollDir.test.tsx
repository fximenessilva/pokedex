import { renderHook, act } from '@testing-library/react-hooks';
import useScrollDirection from './useScrollDir';

const mockScroll = (scrollY: number) => {
  Object.defineProperty(window, 'pageYOffset', {
    get() {
      return scrollY;
    },
  });
};

describe('useScrollDirection', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns "down" when scrolling down', () => {
    const { result } = renderHook(() => useScrollDirection());
    mockScroll(50);

    act(() => {
      mockScroll(100);
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe('down');
  });

  it('returns "up" when scrolling up', () => {
    const { result } = renderHook(() => useScrollDirection());
    mockScroll(100);

    act(() => {
      mockScroll(50);
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe('up');
  });

  it('returns null initially', () => {
    const { result } = renderHook(() => useScrollDirection());
    expect(result.current).toBeNull();
  });

  it('returns null when scroll direction change is less than 10px', () => {
    const { result } = renderHook(() => useScrollDirection());
    mockScroll(50);

    act(() => {
      mockScroll(55);
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBeNull();
  });
});
