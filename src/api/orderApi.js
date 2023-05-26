import axios from "axios"

import { useRecoilState } from "recoil";
import { userInfoAtom} from "../atoms/userAtom";

const URL = process.env.REACT_APP_API_URL;

export const addOrder = async(userName, title, type)=>{
  const response = await axios.post(
    `${URL}/api/order`,
    {
      userName: userName,
      title: title,
      type: type
    }
  )
}