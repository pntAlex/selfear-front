import { Ref } from 'vue'

export const useCursorStore = () => {
  const cursorImage: Ref<string | null> = useState('cursorImage', () => null)

  const setCursorImage = (image: string | null): void => {
    cursorImage.value = image
  }

  return {
    cursorImage,
    setCursorImage
  }
}
