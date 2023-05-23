import { atom, selector } from "recoil";
import { Navigate, useNavigate} from "react-router-dom";

import { userInfoAtom } from "./userAtom";

export const authAtom = atom({
  key: "authAtom",
  default: false
})

export const authSelector = selector({
  key: "authSelector",
  get: ({get}) => {
    const userInfo = get(userInfoAtom);
    if (userInfo.userId === "Auth" && userInfo.password === "1234"){
      return true;
    }
    return false;    
  },
})

