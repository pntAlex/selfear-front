import { Ref } from "vue";

export const useCursorStore = () => {
  const cursorImageId: Ref<number | null> = useState("cursorImage", () => null);

  const setCursorImageId = (id: number | null): void => {
    cursorImageId.value = id;
  };

  return {
    cursorImageId,
    setCursorImageId,
  };
};
