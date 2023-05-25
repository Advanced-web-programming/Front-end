import styled from "styled-components";

import { BrowserRouter, Route, Link } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { userInfoAtom } from "../../atoms/userAtom";

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
  const reset = useResetRecoilState(userInfoAtom);
  return(
    <Container>
      <Title>Name</Title>
      <Input placeholder={"위우진"}/>
      <Title>E-mail</Title>
      <Input placeholder={"E-mail"}/>
      <ButtonFrame>
        <Button color={"rgb(67, 132, 64)"}>Updata Profile</Button>
        <Link to="/Font-end"><Button color={"rgb(200, 70, 60)"} onClick={reset}>LogOut</Button></Link>
      </ButtonFrame>
    </Container>
  )
}