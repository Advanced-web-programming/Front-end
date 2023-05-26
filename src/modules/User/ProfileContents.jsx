import styled from "styled-components";

import { BrowserRouter, Route, Link } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { userInfoAtom } from "../../atoms/userAtom";
import { useState } from "react";
import { updateApi } from "../../api/userApi";
import { useRecoilValue } from "recoil";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-itens: flex-start;
  justify-content: flex-start;
  gap: 7.5px;
`;

const Title = styled.div`
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  padding-left: 5px;
`
const Input = styled.input`
  width: 70%;
  color: #e6edf3;
  font-size: 0.9rem;
  background-color: rgb(14, 17, 22);
  border: 0.1px solid #e6edf3;
  border-radius: 5px;
  padding: 5px 12px;
  margin-bottom: 20px;
  &:focus{
    outline: none;
    border: 0.5px solid rgb(71, 127, 239);
  }
`
const Button = styled.button`
  font-size: 0.9rem;
  background-color: ${props=>props.color};
  border-radius: 5px;
  padding: 6px 16px;
  color: white;
  font-weight: 600;
`
const ButtonFrame = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`

export function ProfileContents() {
  const user = useRecoilValue(userInfoAtom)
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const reset = useResetRecoilState(userInfoAtom);

  const handleUpdate = async() => {
    const reqName = (name === "" ? user.userName : name)
    const reqPassword = (password === "" ? user.password : password)
    const response = await updateApi(user.id, user.userId, reqName, reqPassword);
    reset()
  }

  return(
    <Container>
      <Title>Password</Title>
      <Input placeholder={"Password"} value={password} onChange={(e)=>setPassword(e.currentTarget.value)}/>
      <Title>Name</Title>
      <Input placeholder={"Name"}  value={name} onChange={(e)=>setName(e.currentTarget.value)}/>
      <ButtonFrame>
        <Button color={"rgb(67, 132, 64)"} onClick={handleUpdate}>Updata Profile</Button>
        <Link to="/"><Button color={"rgb(200, 70, 60)"} onClick={reset}>LogOut</Button></Link>
      </ButtonFrame>
    </Container>
  )
}