import axios from "axios"

const URL = process.env.REACT_APP_API_URL;

export const loginApi = async(id, password) => {
  const userId = await axios.get(
    `${URL}/api/user/${id}`,
    {
      params: {
        password: password
      }
    }
  )
  return userId.data;
}

export const registernApi = async(userId, userName, password) => {
  const response = await axios.post(
    `${URL}/api/user`,
    {
      email: userId,
      name: userName,
      password: password
    },
    { 
      headers:{ 
       'Content-type': 'application/json', 
       'Accept': 'application/json' 
      } 
    } 
  )
  return response.data
}

export const updateApi = async(id, email, name, password) => {
  const response = await axios.put(
    `${URL}/api/user/${id}`,
    {
      email: email,
      name: name,
      password: password
    }
  )
}