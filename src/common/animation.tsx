import {useEffect} from 'react';
import {
  WithTimingConfig,
  useSharedValue,
  useDerivedValue,
  withTiming,
  Easing,
  SharedValue,
} from 'react-native-reanimated';
export const sharedBin = (value: boolean): 0 | 1 => {
  'worklet';

  return value ? 1 : 0;
};
export const useMix = (progress: SharedValue<number>, x: number, y: number) => {
  'worklet';

  return useDerivedValue(() => x + progress.value * (y - x));
};
export const useSharedTransition = (
  state: boolean | number,
  config?: WithTimingConfig,
  initialValue?: number,
): SharedValue<number> => {
  const value = useSharedValue(initialValue ?? 0);

  useEffect(() => {
    value.value = typeof state === 'boolean' ? sharedBin(state) : state;
  }, [state, value]);

  return useDerivedValue(() =>
    withTiming(
      value.value,
      Object.assign(
        {duration: 500, easing: Easing.bezier(0.33, 0.01, 0, 1)},
        config,
      ),
    ),
  );
};
