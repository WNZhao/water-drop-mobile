import { useCallback, useState } from "react"
import useMount from "./useMount"

interface IOptions {
  params: Record<string, string>;
  manual: boolean;
  onSuccess: (res: unknown) => void
  onError: (res: unknown) => void
}

/**
 * 1. 加载触发请求获取数据
 * 2. 手动触发请求
 * @param service 
 * @param params 
 * @returns 
 */
const useRequest = (service: (params: Record<string, string>) => Promise<unknown>, options: IOptions) => {

  const [data, setData] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false)

  const init = useCallback((curParams: Record<string, string>) => {
    setLoading(true)
    return service(curParams).then((res) => {
      setLoading(false)
      setData(res)
      options.onSuccess && options.onSuccess(res)
    })
      .catch((err) => {
        setLoading(false)
        options.onError && options.onError(err)
      })
  }, [service]) // service 变了才会重新初始化init

  useMount(() => {
    if (!options.manual) {
      init(options.params)
    }
  })

  const run = (runParams: Record<string, string>) => {
    return init(runParams)
  }

  return [loading, data, run];
}

export default useRequest