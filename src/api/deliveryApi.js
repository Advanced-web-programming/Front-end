import axios from "axios"

import { useRecoilState, useRecoilValue } from "recoil";

const URL = process.env.REACT_APP_API_URL;

export const completeDeliveryApi = async(id, deliveryNumber, deliveryCompany) => {
  const response = await axios.patch(
    `${URL}/api/delivery/complete`,
    {
      id: id,
      deliveryNumber: deliveryNumber,
      deliveryCompany: deliveryCompany
    }
  )
  return response;
}

export const approveDeliveryApi = async(id)=>{
  const response = await axios.post(
    `${URL}/api/delivery/${id}`
  )
}

export const getUserDeliveryApi = async(userName) => {
  const response = await axios.get(
    `${URL}/api/delivery`,
    {
      params: {
        userName: userName
      }
    }
  )
  return response.data.orderCreateResList;
}

export const getDeliveryApi = async() => {
  const response = await axios.get(
    `${URL}/api/delivery/all`
  )
  return response.data.orderCreateResList;
}