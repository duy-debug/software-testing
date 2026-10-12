import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTimer } from '../hooks/useTimer';

describe('useTimer hook (Skill 09 & 11)', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('Khởi tạo với thời lượng ban đầu chính xác', () => {
    const { result } = renderHook(() => useTimer(2400));
    expect(result.current.secondsLeft).toBe(2400);
    expect(result.current.isRunning).toBe(false);
    expect(result.current.isExpired).toBe(false);
  });

  it('Bắt đầu đếm ngược thời gian khi start() được gọi', () => {
    const { result } = renderHook(() => useTimer(100));

    act(() => {
      result.current.start();
    });

    expect(result.current.isRunning).toBe(true);

    act(() => {
      vi.advanceTimersByTime(2000); // 2 giây
    });

    expect(result.current.secondsLeft).toBeLessThanOrEqual(98);
  });

  it('Gọi onExpire đúng 1 lần duy nhất khi hết giờ', () => {
    const onExpireMock = vi.fn();
    const { result } = renderHook(() => useTimer(2, onExpireMock));

    act(() => {
      result.current.start();
    });

    act(() => {
      vi.advanceTimersByTime(3000); // 3 giây > 2 giây
    });

    expect(result.current.secondsLeft).toBe(0);
    expect(result.current.isExpired).toBe(true);
    expect(onExpireMock).toHaveBeenCalledTimes(1);

    // Tiến thêm thời gian để đảm bảo không bị gọi lần 2
    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(onExpireMock).toHaveBeenCalledTimes(1);
  });

  it('Dọn dẹp timer khi unmount, không rò rỉ interval', () => {
    const clearIntervalSpy = vi.spyOn(window, 'clearInterval');
    const { result, unmount } = renderHook(() => useTimer(100));

    act(() => {
      result.current.start();
    });

    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();
  });
});
