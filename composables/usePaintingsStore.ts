import { Ref } from 'vue'
import paintingsData from '@/assets/data/paintings.json'

interface Picture {
  src: string
  alt: string
}

export interface Painting {
  id: number
  title: string
  alt: string
  src: string
  src_full?: string
  cursor: string
  date: string
  paint_type: string
  dimensions: string
  support: string
  pictures: Picture[]
}

export const usePaintingsStore = () => {
  const paintings: Ref<Painting[]> = useState('paintings', () => paintingsData || [])

  const getPaintingByTitle = (title: string): { index: number; painting: Painting } => {
     const index = paintings.value.findIndex(painting => painting.title === title)
     
     return {
      index, 
      painting: paintings.value[index]
     }
  }

  const getNextPainting = (index: number): Painting => {
    return paintings.value[(index + 1) % paintings.value.length]
  }

  return {
    paintings,
    getPaintingByTitle,
    getNextPainting
  }
}
