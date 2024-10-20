import paintingsData from '@/assets/data/paintings.json'

export const usePaintingsStore = () => {
  const paintings = useState('paintings', () => paintingsData || [])

  const getPaintingByTitle = (title) => {
     const index = paintings.value.findIndex(painting => painting.title === title)
     
     return {
      index, 
      painting : paintings.value[index]
     }
  }

  const getNextPainting = (index) => {
    return paintings.value[(index + 1) % paintings.value.length]
  }

  return {
    paintings,
    getPaintingByTitle,
    getNextPainting
  }
}