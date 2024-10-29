import { Ref } from 'vue'

export const useLoaderStore = () => {
  const loaderInit: Ref<boolean> = useState('loaderInit', () => false)

  const setLoaderInit = (init: boolean): void => {
    loaderInit.value = init
  }

  return {
    loaderInit,
    setLoaderInit
  }
}
