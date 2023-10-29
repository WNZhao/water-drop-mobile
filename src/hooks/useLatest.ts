import { useRef } from "react"

/**
 * 获取最Value
 * @param fn 
 * @returns 
 */

const useLatest = <T>(value: T) => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}


export default useLatest