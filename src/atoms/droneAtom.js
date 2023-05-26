import { atom, selector } from "recoil";
import { Navigate, useNavigate} from "react-router-dom";

export const categoryAtom = atom({
  key: "categoryAtom",
  default: {
    key: 0,
    label: "Category"
  }
})

export const titleAtom = atom({
  key: "titleAtom",
  default: ""
})

export const typeAtom = atom({
  key: "typyAtom",
  default: ""
})

export const madeAtom = atom({
  key: "madeAtom",
  default: ""
})

export const weightAtom = atom({
  key: "weightAtom",
  default: ""
})

export const speedAtom = atom({
  key: "speedAtom",
  default: ""
})

export const timeAtom = atom({
  key: "timeAtom",
  default: ""
})

export const selectedCategoryList = atom({
  key: "selectedCategoryList",
  default: [
    {
      categoryId: 0,
      itemId: -1
    },
    {
      categoryId: 0,
      itemId: -1
    },
    {
      categoryId: 0,
      itemId: -1
    },
    {
      categoryId: 0,
      itemId: -1
    },
    {
      categoryId: 0,
      itemId: -1
    },
  ]
})


