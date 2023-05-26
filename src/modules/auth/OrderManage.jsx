import { useState } from "react";
import styled from "styled-components";

import { getUserDeliveryList } from "../../atoms/userAtom";
import { useRecoilState } from "recoil";
import { useResetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { approveDeliveryApi } from "../../api/deliveryApi";

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
  margin: 10px 0 0 45px;
`

const InputFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap 20px;
  margin: 5px 0 50px 50px;
`

const Input = styled.input`
  width: 80%;
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
  padding: 6px 12px;
  color: white;
  font-weight: 500;
`
const OrderItem = styled.div`
 display: grid;
 grid-template-columns: repeat(6, 1fr);
 margin-bottom: 20px;
`
const Text = styled.div`
  text-align: center;
  color: ${props=>props.color};
  font-size: ${props=>props.size};
  font-weight: ${props=>props.weight};
  border-right: ${props=>(props.border ? "0.5px solid rgb(71, 127, 239)" : "")};
`
const State = styled.button`
  color: ${props=>(props.color ? props.color : "white")};
  font-size: ${props=>props.size};
  font-weight: ${props=>props.weight};
  border-radius: 5px;
  padding: 6px 16px;
  font-weight: 500;
  margin: 0 auto;
`

function UserOrderItem(props) {
  const [isVisible, setIsVisible] = useState(false)
  const updateState = (idx) => {
    if (!isVisible && props.state === "승인대기")
      approveDeliveryApi(idx)
    setIsVisible(true)
  };
  return(
        <OrderItem>
          <Text color={"white"} size={"0.8rem"} weight={"600"} border={true}>{props.orderNumber}</Text>
          <Text color={"white"} size={"0.8rem"} weight={"600"} border={true}>{props.userName}</Text>
          <Text color={"white"} size={"0.8rem"} weight={"600"} border={true}>{props.date}</Text>
          <Text color={"white"} size={"0.8rem"} weight={"600"} border={true}>{props.title}</Text>
          <Text color={"white"} size={"0.8rem"} weight={"600"} border={true}>{props.type}</Text>
          <State onClick={()=>updateState(props.id)} color={props.id === 0 ? false : (props.state === "완료"? "rgb(67, 132, 64)" : ((props.state === "배송준비" || isVisible) ? "#CFC036" : "#ED0000"))} size={"0.8rem"} weight={"600"}>{(props.state === "승인대기" && isVisible) ? "배송준비" : props.state}</State>
        </OrderItem>
  )
}

export function OrderManage() {
  const [user, setUser] = useState();
  const [selectedUser, setSelectedUser] = useState("")
  const userNameDeliveryList = useRecoilValue(getUserDeliveryList(selectedUser));

  const searchHandler = () => {
    setSelectedUser(user)
  }

  return(
    <Container>
      <Title size={"1.25rem"}>유저 검색</Title>
      <InputFrame>
        <Input placeholder={"User Name"} value={user} onChange={(e)=>setUser(e.currentTarget.value)}/>
        <Button color={"rgb(67, 132, 64)"} onClick={searchHandler}>Search</Button>
      </InputFrame>
      <UserOrderItem id={0} orderNumber={"주문번호"} userName={"고객"} date={"날짜"} title={"구분"} type={"종류"} state={"State"}/>
      {
        userNameDeliveryList !== undefined && 
        userNameDeliveryList.map(((item)=>{
          return <UserOrderItem key={item.id} id={item.id} orderNumber={item.orderNumber} userName={item.userName} date={item.date.slice(0, 10)} title={item.title} type={item.type} state={item.state}/>
        }))
      }
    </Container>
  )
}