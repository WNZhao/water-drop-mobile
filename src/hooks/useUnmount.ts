import { useEffect } from 'react';
import useLatest from './useLatest';

/**
 * 组件制裁时运行
 * @param fn
 * @returns
 */

const useUnmont = (fn: () => void) => {
  const fnRef = useLatest(fn);
  useEffect(() => () => fnRef.current(), []);

  return '';
};

export default useUnmont;
