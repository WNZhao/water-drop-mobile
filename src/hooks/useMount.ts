import { useEffect } from "react"

/**
 * 组件加载时运行
 * @param fn 
 * @returns 
 */

const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.()
  }, [])

  return ""
}

export default useMount