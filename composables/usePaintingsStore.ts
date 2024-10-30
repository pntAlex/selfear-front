// import { useState } from "nuxt/app";
// import { Ref } from "vue";

// export interface Picture {
//   url: string;
//   alternativeText: string;
// }

// export interface Painting {
//   id: number;
//   slug: string;
//   name: string;
//   cursor: string;
//   date: string;
//   type: string;
//   width: number;
//   length: number;
//   depth: number;
//   support: string;
//   picture: Picture;
//   pictures: Picture[];
// }

// export const usePaintingsStore = () => {
//   const paintings: Ref<Painting[]> = useState(
//     "paintings",
//     () => paintings || []
//   );

//   const getPaintingByTitle = (
//     name: string
//   ): { index: number; painting: Painting } => {
//     const index = paintings.value.findIndex(
//       (painting) => painting.name === name
//     );

//     return {
//       index,
//       painting: paintings.value[index],
//     };
//   };

//   const getNextPainting = (index: number): Painting => {
//     return paintings.value[(index + 1) % paintings.value.length];
//   };

//   return {
//     paintings,
//     getPaintingByTitle,
//     getNextPainting,
//   };
// };
