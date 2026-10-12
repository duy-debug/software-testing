import { useState, useEffect, useRef, useCallback } from 'react';

export interface UseTimerReturn {
  secondsLeft: number;
  isExpired: boolean;
  isRunning: boolean;
  start: () => void;
  stop: () => void;
  reset: (newDurationSec?: number) => void;
}

/**
 * Hook đếm ngược thời gian dựa trên Date.now() (Skill 09 single-owner)
 */
export function useTimer(
  initialDurationSec: number,
  onExpire?: () => void
): UseTimerReturn {
  const [secondsLeft, setSecondsLeft] = useState<number>(initialDurationSec);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isExpired, setIsExpired] = useState<boolean>(false);

  const durationRef = useRef<number>(initialDurationSec);
  const endTimeRef = useRef<number | null>(null);
  const onExpireRef = useRef(onExpire);
  const hasExpiredRef = useRef<boolean>(false);
  const intervalIdRef = useRef<number | null>(null);

  // Cập nhật ref callback onExpire
  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  // Dọn dẹp interval
  const clearIntervalSafe = useCallback(() => {
    if (intervalIdRef.current !== null) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
  }, []);

  const tick = useCallback(() => {
    if (!endTimeRef.current) return;

    const now = Date.now();
    const remainingMs = endTimeRef.current - now;
    const remainingSec = Math.max(0, Math.ceil(remainingMs / 1000));

    setSecondsLeft(remainingSec);

    if (remainingSec <= 0) {
      clearIntervalSafe();
      setIsRunning(false);
      setIsExpired(true);

      if (!hasExpiredRef.current) {
        hasExpiredRef.current = true;
        if (onExpireRef.current) {
          onExpireRef.current();
        }
      }
    }
  }, [clearIntervalSafe]);

  const start = useCallback(() => {
    if (isRunning || isExpired) return;

    endTimeRef.current = Date.now() + secondsLeft * 1000;
    hasExpiredRef.current = false;
    setIsRunning(true);

    clearIntervalSafe();
    intervalIdRef.current = window.setInterval(tick, 200);
  }, [isRunning, isExpired, secondsLeft, tick, clearIntervalSafe]);

  const stop = useCallback(() => {
    if (!isRunning) return;
    clearIntervalSafe();
    setIsRunning(false);

    if (endTimeRef.current) {
      const now = Date.now();
      const remainingMs = Math.max(0, endTimeRef.current - now);
      setSecondsLeft(Math.ceil(remainingMs / 1000));
      endTimeRef.current = null;
    }
  }, [isRunning, clearIntervalSafe]);

  const reset = useCallback(
    (newDurationSec?: number) => {
      clearIntervalSafe();
      const duration = newDurationSec !== undefined ? newDurationSec : durationRef.current;
      durationRef.current = duration;
      endTimeRef.current = null;
      hasExpiredRef.current = false;
      setSecondsLeft(duration);
      setIsExpired(false);
      setIsRunning(false);
    },
    [clearIntervalSafe]
  );

  // Unmount cleanup
  useEffect(() => {
    return () => {
      clearIntervalSafe();
    };
  }, [clearIntervalSafe]);

  return {
    secondsLeft,
    isExpired,
    isRunning,
    start,
    stop,
    reset,
  };
}
