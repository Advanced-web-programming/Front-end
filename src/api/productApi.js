import axios from "axios"

import { useRecoilState, useRecoilValue } from "recoil";
import { userInfoAtom, userOrderListAtom} from "../atoms/userAtom";
import { categoryAtom, speedAtom, timeAtom, titleAtom, typeAtom } from "../atoms/droneAtom";

const URL = process.env.REACT_APP_API_URL;

export function ProductApi() {
  const category = useRecoilValue(categoryAtom)
  const title = useRecoilValue(titleAtom)
  const type = useRecoilValue(typeAtom)
  const made = useRecoilValue(made)
  const weight = useRecoilValue(weight)
  const speed = useRecoilValue(speedAtom)
  const time = useRecoilValue(timeAtom)

  const getCategoryPost = async(props) => {
    const response = await axios.get(
      `${URL}/api/product/category${props.id}`
    )
  }

  return(
    getCategoryPost
  )
}

export const createProduct = async (category, title, type,made,weight, speed,  time,  file) => {
  const formData = new FormData()
  formData.append("productCreateReq", 
    JSON.stringify({
      categoryId: category,
      title: title,
      type: type,
      made: made,
      weight: weight,
      speed: speed,
      time: time,
    })
  )

//   formData.append("file", file)
//  // FormData의 key 확인
//     // @ts-ignore
//     for (const key of formData.keys()) {
//       console.log(key);
//     }
//     // FormData의 value 확인
//     // @ts-ignore
//     for (const value of formData.values()) {
//       console.log(value);
//     }
const headers = {
  post: {
    'Content-Type': '',
  },
  data: 'data',
  encType : "multipart/form-data", //필수 아님, 파일을 넣을거면 필수(e)
  dataType: "json",
  processData: false,

};

//   const response = await axios.post(
//     `${URL}/api/product`, formData, 
//     {
//       headers: { 'Content-Type': 'multipart/form-data' },
//       transformRequest: (data, headers) => {
//         return data;
//       },
//     }
//   )
// }
const response = await axios.post(
  `${URL}/api/product`, formData, 
  {
    headers: headers,
    transformRequest: (data, headers) => {
      return data;
    },
  }
)
// console.log(response)
}



export const deleteProduct = async(id) =>{
  const response = await axios.delete(
    `${URL}/api/product/${id}`,
  )
} 

export async function getAllPost () {
  const response = await axios.get(
    `${URL}/api/product/all`
  )
  return response;
}