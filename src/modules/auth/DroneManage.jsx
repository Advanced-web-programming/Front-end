import { useState } from "react";
import styled from "styled-components";

import { selectedUserAtom, userOrderListAtom } from "../../atoms/userAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryAtom, titleAtom, typeyAtom,madeAtom,weightAtom, speedAtom, timeAtom } from "../../atoms/droneAtom";

import { DropdownButton, UploadImg } from "../../utils/antdUI";

import { categoryList, orderBasicInfo } from "../../static/static";

import { DroneCard } from "./DroneCard";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-itens: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;

const Title = styled.div`
  color: white;
  font-size: ${props=>props.size};
  font-weight: 600;
  padding-left: 5px;
  margin-top: ${props=>(props.marginTop && "20px")};
  height: ${props=>(props.height)};
  line-height: ${props=>(props.height)};
`

const InputFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap 20px;
  margin-top: 30px;
  margin-left: 50px;
`

const ImgListFrame = styled.div`
  margin: 0 0 20px 0;
  width: ${props=>props.width};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border-top: 0.5px solid ${props=>(!props.border && "#e6edf3")};
  border-bottom: 0.5px solid ${props=>(!props.border && "#e6edf3")};
  padding: 2rem 2rem;
`

const Input = styled.input`
  width: ${props=>(props.width ? props.width : "80%" )};
  color: #e6edf3;
  font-size: 0.9rem;
  background-color: rgb(14, 17, 22);
  border: 0.1px solid #e6edf3;
  border-radius: 5px;
  padding: 5px 12px;
  &:focus{
    outline: none;
    border: 0.5px solid rgb(71, 127, 239);
  }
`
const Button = styled.button`
  font-size: 0.8rem;
  background-color: ${props=>props.color};
  border-radius: 5px;
  padding: 6px 16px;
  color: white;
  font-weight: 500;
  margin-left: auto;
`
const CategoryFrame = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
gap: 10px;
margin: 0 0 0 0;
width: 100%;
`
const ItemFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 15px;
`
const TitleFrame = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export function DroneManage() {
  const [file,setFile] = useState("")
  const [user, setUser] = useState();
  const [userName, setUserName ] = useRecoilState(selectedUserAtom);
  const category = useRecoilValue(categoryAtom);
  const [title, setTitle] = useRecoilState(titleAtom);
  const [type, setType] = useRecoilState(typeyAtom);
  const [made, setMade] = useRecoilState(madeAtom);
  const [weight, setWeight] = useRecoilState(weightAtom);
  const [speed, setSpeed] = useRecoilState(speedAtom);
  const [time, setTime] = useRecoilState(timeAtom);

  const searchHandler = () => {
    setUserName(user);
  }

  return(
    <Container>
      {
        orderBasicInfo.map((category)=>{
          return(
          <>
            <TitleFrame>
              <Title size={"1.25rem"} marginTop={true}>{category.title}</Title>
              <Button color={"rgb(200, 70, 60)"}>삭제</Button>
            </TitleFrame>
            <ItemFrame>
              {
                category.items.map((item)=>{
                  return <DroneCard category={category.id} item = {item}/>
                })
              }
            </ItemFrame>
          </>)
        })
      }
      <InputFrame>
              <ImgListFrame>
                  <UploadImg setFile={setFile}/>
                  <InputFrame>
                    <CategoryFrame>
                      <Title size={"1.1rem"}>{category.label}</Title>
                      <DropdownButton />
                      
                    </CategoryFrame>
                    <Input placeholder={"기종"} value={title} onChange={(e)=>setTitle(e.currentTarget.value)} width={"400px"}/>
                    <Input placeholder={"종류"} value={type} onChange={(e)=>setType(e.currentTarget.value)} width={"400px"}/>
                    <Input placeholder={"제조사"} value={made} onChange={(e)=>setMade(e.currentTarget.value)} width={"400px"}/>
                    <Input placeholder={"자체 중량"} value={weight} onChange={(e)=>setWeight(e.currentTarget.value)} width={"400px"}/>
                    <Input placeholder={"최대 속도"} value={speed} onChange={(e)=>setSpeed(e.currentTarget.value)} width={"400px"}/>
                    <Input placeholder={"비행 속도"} value={time} onChange={(e)=>setTime(e.currentTarget.value)} width={"400px"}/>
                    <Button color={"rgb(67, 132, 64)"} onClick={searchHandler}>Add</Button>
                  </InputFrame>
              </ImgListFrame>
      </InputFrame>
    </Container>
  )
}