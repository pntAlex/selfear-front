export const useLoaderStore = () => {
  const loaderInit = useState('loaderInit', () => false)

  const setLoaderInit = (init) => {
    loaderInit.value = init
  }

  return {
    loaderInit,
    setLoaderInit
  }
}