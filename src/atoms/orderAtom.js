import { selector } from "recoil";
import { atom } from "recoil";
import { ProductApi, getAllPost } from "../api/productApi";

export const orderModalOpen = atom({
  key: "orderModalOpen", 
  default: false 
});

export const selectedCategory = atom({
  key: "selectedCategory",
  default: {
    id: 0,
    title: "",
    items: [
      {
        id: 0,
        title: "",
        type: "",
        decription:{
          made: '',
          weight: '',
          speed: '',
          time: ''
        }
      },
    ]
  },
})

export const selectedDrone = atom({
  key: "selectedDrone",
  default: {
    categoryId: 0,
    itemId: 1,
  }
})

export const refreshAtom = atom({
  key: "refreshAtom",
  default: 1
})

export const allPost = selector({
  key: "allPost",
  get: async({get}) => {
    const refresh = get(refreshAtom)
    const allPost = await getAllPost();
    return allPost.data.productCategorySearchResList;
  }
})