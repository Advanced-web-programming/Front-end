import { atom, selector } from "recoil";
import { Navigate, useNavigate} from "react-router-dom";
import { getDeliveryApi, getUserDeliveryApi } from "../api/deliveryApi";
import { selectorFamily } from "recoil";

export const userInfoAtom = atom({
  key: "userInfoAtom", 
  default: {
    id: "",
    userId: "",
    userName: "",
    password: ""
  } 
});

export const selectedUserAtom = atom({
  key: "selectedUserAtom",
  default: ""
})

export const userOrderListAtom = atom({
  key: "userOrderListAtom",
  default: [
    {
      id: 1,
      orderNumber: "1234",
      userName: "이은섭",
      date: "2023-05-23",
      title: "슈퍼드론",
      type: "어쩌고저쩌고",
      state: "승인 대기"
    },
    {
      id: 2,
      orderNumber: "1234",
      userName: "이은섭",
      date: "2023-05-23",
      title: "슈퍼드론",
      type: "어쩌고저쩌고",
      state: "완료"
    }
  ]
})

export const getAllDeliveryList = selector({
  key: "getAllDeliveryList",
  get: async({get})=>{
    const response = await getDeliveryApi();
    return response;
  }
})


export const getUserDeliveryList = selectorFamily({
  key: "getUserDeliveryList",
  get: (nm) => async({get})=>{
    const response = await getUserDeliveryApi(nm)
    return response
  }
})