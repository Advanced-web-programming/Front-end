import styled, {createGlobalStyle} from "styled-components"
import React, { useEffect, useState} from "react";

import { orderModalOpen, selectedCategory, selectedDrone } from "../../atoms/orderAtom";
import { useRecoilState, useResetRecoilState } from "recoil";

import { DroneCard } from "./DroneCard";

import { SpinUI, SuccesMessage } from "../../utils/antdUI";
import { addOrder } from "../../api/orderApi";
import { useRecoilValue } from "recoil";

import { authAtom } from "../../atoms/authAtom";

const Container = styled.section`
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const GlobalStyles = createGlobalStyle`
  body {
    overflow: hidden;
  }
`
const ModalFrame = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: auto;
  width: 1200px;
  height: 720px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
const TempContainer = styled.div`
  width: 100%;
  height: 100%;
  marigin: 0;
`

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 10%;
  padding: 0 50px;
`
const Item = styled.div`
  font-size:  ${props=>props.size};
  font-weight: 600;
  cursor: pointer;
  margin: 0 10px;
`

const Text = styled.div`
  color: ${props=>props.color};
  font-size: ${props=>props.size};
  font-weight: ${props=>props.weight};
  margin-top: ${props=>props.marginTop};
`

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  background-color: #EFEFEF;
  border-radius: 5px;
  padding: 10px 15px;
  margin-top: 10px;
`

const ContentsFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px 0 50px;
`

const Type = styled.div`
  padding: 20px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
`
const Button = styled.div`
  background-color: #3A3A3A;
  border-radius: 10px;
  margin: 30px 0 0 auto;
  padding: 12px 28px;
  grid-column: 1 / 3;
  color: #FFFFFF;
  text-align: center;
  cursor: pointer;
  border: 1px solid #3A3A3A;
  &:hover{
    color: #3A3A3A;
    background-color: #FFFFFF;
    border: 1px solid #3A3A3A;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`

function ModalContent(props){
  const [category, setCategory] = useRecoilState(selectedCategory);
  const [isOpen, setIsOpen] = useRecoilState(orderModalOpen);
  const resetList1 = useResetRecoilState(selectedCategory);
  const resetList2 = useResetRecoilState(selectedDrone);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [object, setObject] = useState("")
  const [count, setCount] = useState("")

  const [drone, setDrone] = useRecoilState(selectedDrone)
  const auth = useRecoilValue(authAtom)

  const handleClick = (e) => {
    e.stopPropagation();
  };
  const onClickModal = () => {
    if(!auth){
      alert("로그인을 하세요")
      return
    }
    if(userName === "" || email === "" || object === "" || count === ""){
      alert("정보를 입력하세요")
      return
    }
    addOrder(userName, drone.title, drone.type)
    setIsLoading(true);
  }
  
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        resetList1()
        resetList2()
        setIsLoading(false);
        setIsSuccess(true);
      }, 1000);
    }
  }, [isLoading]);

  return(
    <ModalFrame onClick={handleClick}>
      {!isLoading ?
        !isSuccess ?
        (
          <TempContainer>
            <Header>
              <Item size={'1.5rem'} onClick={props.clickEvent}>✕</Item>
            </Header>
            <ContentsFrame>
              <Contents>
                <Text color={"black"} size={"24px"} weight={"700"} marginTop={"0px"}>함께할 준비가 거의 끝났습니다.</Text>
                <Text color={"black"} size={"15px"} weight={"500"} marginTop={"0px"}>상담 신청을 완료하면 1주일 이내로 상담 일정을 잡으실 수 있습니다.</Text>
                <Text color={"black"} size={"18px"} weight={"600"} marginTop={"30px"}>이름</Text>
                <Input value={userName} onChange={(e)=>setUserName(e.currentTarget.value)} />
                <Text color={"black"} size={"18px"} weight={"600"} marginTop={"30px"}>이메일</Text>
                <Input value={email} onChange={(e)=>setEmail(e.currentTarget.value)} />
                <Text color={"black"} size={"18px"} weight={"600"} marginTop={"30px"}>사용 목적</Text>
                <Input value={object} onChange={(e)=>setObject(e.currentTarget.value)} />
                <Text color={"black"} size={"18px"} weight={"600"} marginTop={"30px"}>예상 구매 수량</Text>
                <Input value={count} onChange={(e)=>setCount(e.currentTarget.value)} />
                <Button onClick={onClickModal}>구매 하기</Button>
              </Contents>
              <Type>
                  {
                    category.items.map((item)=>{
                      return (
                        <DroneCard key={item.id} item={item} />
                      )
                    })
                  }
                
              </Type>
            </ContentsFrame>
          </TempContainer>
        ):
        (
          <SuccesMessage isOpen={setIsOpen}/>
        )
      : <SpinUI />}
    </ModalFrame>
  )
}

export function Modal() {
  const [isOpen, setIsOpen] = useRecoilState(orderModalOpen);
  const resetList1 = useResetRecoilState(selectedCategory);
  const resetList2 = useResetRecoilState(selectedDrone);
  const onClickModal = () => {
    resetList1()
    resetList2()
    setIsOpen(false)
  }
  return(
      <>
        <GlobalStyles />
        <Container onClick={onClickModal}>
          <ModalContent clickEvent= {onClickModal}/>
        </Container>
      </>
  )
}