// import { useState } from '#app'

export const useCursorStore = () => {
  const cursorImage = useState('cursorImage', () => null)

  const setCursorImage = (image) => {
    cursorImage.value = image
  }

  return {
    cursorImage,
    setCursorImage
  }
}