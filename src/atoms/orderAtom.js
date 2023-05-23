import { atom } from "recoil";

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