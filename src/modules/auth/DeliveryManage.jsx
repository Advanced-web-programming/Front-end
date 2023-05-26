import { useState } from "react";
import styled from "styled-components";

import { selectedUserAtom, userOrderListAtom, getUserDeliveryList } from "../../atoms/userAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { completeDeliveryApi } from "../../api/deliveryApi";

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
  margin-top: 10px;
`

const InputFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  gap 20px;
  margin: 5px 0 20px 0;
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
  padding: 6px 12px;
  color: white;
  font-weight: 500;
`
const OrderItem = styled.div`
 display: grid;
 grid-template-columns: repeat(${props=>props.count}, 1fr);
 padding-bottom: 15px;
 margin-bottom: 15px;
 border-bottom: 1px solid rgb(33, 37, 43);
 align-items: center;
`
const Text = styled.div`
  text-align: center;
  color: ${props=>props.color};
  font-size: ${props=>props.size};
  font-weight: ${props=>props.weight};
  border-right: ${props=>(props.border ? "0.5px solid rgb(71, 127, 239)" : "")};
`
const OrderListFrame = styled.div`
  width: 100%;
  height: 300px;
  padding: 1rem 0;
  margin-bottom: 30px;
  border-top: 2px solid rgb(33, 37, 43);
  border-bottom: 2px solid rgb(33, 37, 43);
  flex-direction: column;
  align-itens: flex-start;
  justify-content: flex-start;
  overflow-y: scroll;
  overflow-x: hidden;
`
const State = styled.button`
  color: ${props=>(props.color ? props.color : "white")};
  font-size: ${props=>props.size};
  font-weight: ${props=>props.weight};
  border-radius: 5px;
  padding: 4px 12px;
  font-weight: 500;
  margin: 0 auto;
  background-color: rgb(71, 127, 239);
`
const DeliveryItemFrames = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 10px;
`

function DeliveryItemFrame(props){
  return(
  <DeliveryItemFrames>
      <Text color={"white"} size={"0.8rem"} weight={"600"}>운송번호: {props.deliveryNumber}</Text>
      <Text color={"white"} size={"0.8rem"} weight={"600"}>운송사: {props.deliveryCompany}</Text>
      <Text color={"white"} size={"0.8rem"} weight={"600"}>고객: {props.userName}</Text>
      <Text color={"white"} size={"0.8rem"} weight={"600"}>날짜: {props.date}</Text>
  </DeliveryItemFrames>
  )
}

function UserOrderItem(props) {
  return(
    <OrderItem count={"6"}>
      <Text color={"white"} size={"0.8rem"} weight={"600"}>{props.orderNumber}</Text>
      <Text color={"white"} size={"0.8rem"} weight={"600"}>{props.userName}</Text>
      <Text color={"white"} size={"0.8rem"} weight={"600"}>{props.date}</Text>
      <Text color={"white"} size={"0.8rem"} weight={"600"}>{props.title}</Text>
      <Text color={"white"} size={"0.8rem"} weight={"600"}>{props.type}</Text>
      <State onClick={()=>props.handleOrder(props.id, props.userName, props.date)} color={"white"} size={"0.8rem"} weight={"600"}>{"Select"}</State>
    </OrderItem>
  )
}

export function DeliveryManage() {
  const [user, setUser] = useState();
  const [deliveryNumber, setDeliveryNumber] = useState("");
  const [deliveryCompany, setDeliveryCompany] = useState("");
  const [selectedOrder, setSelectedOrder] = useState({
    userId: "",
    userName: "",
    date: "",
    deliveryNumber: "",
    deliveryCompany: "",
    
  });

  const [userName, setUserName ] = useRecoilState(selectedUserAtom);
  const userNameDeliveryList = useRecoilValue(getUserDeliveryList(userName));
  const searchHandler = () => {
    setUserName(user);
  }

  const clickSendDeliveryAPI = () => {
    if(selectedOrder.id === "" || selectedOrder.deliveryNumber === "" || selectedOrder.deliveryCompany === ""){
      alert("정보를 입력해주세요")
      return
    }
    completeDeliveryApi(selectedOrder.userId, selectedOrder.deliveryNumber, selectedOrder.deliveryCompany)
  }

  const handleOrder = (id, userName, date) => {
    setSelectedOrder((prevJSON) => {
      const updatedJSON = { 
        ...prevJSON,
        userId: id,
        userName: userName,
        date: date
       };
      return updatedJSON;
    });
  }

  const handleDeliveryNumber = () => {
    setSelectedOrder((prevJSON) => {
      const updatedJSON = { ...prevJSON, deliveryNumber: deliveryNumber };
      return updatedJSON;
    });
  }

  const handleDeliveryCompany = () => {
    setSelectedOrder((prevJSON) => {
      const updatedJSON = { ...prevJSON, deliveryCompany: deliveryCompany };
      return updatedJSON;
    });
  }

  return(
    <Container>
      <Title size={"1.25rem"}>유저 검색</Title>
      <InputFrame>
        <Input placeholder={"User Name"} value={user} onChange={(e)=>setUser(e.currentTarget.value)}/>
        <Button color={"rgb(67, 132, 64)"} onClick={searchHandler}>Search</Button>
      </InputFrame>
      <OrderListFrame>
        {
          userNameDeliveryList.map((item)=>{
            return (
              item.state === "배송준비" ?
              <UserOrderItem handleOrder={handleOrder} key={item.id} id={item.id} orderNumber={item.orderNumber} userName={item.userName} date={item.date.slice(0, 10)} title={item.title} type={item.type} state={item.state}/>
              : <></>
            )
          })
        }
      </OrderListFrame>
      <Title size={"1.25rem"}>배송번호 등록</Title>
      <InputFrame>
        <Input width={"40%"} placeholder={"주문번호"} value={deliveryNumber} onChange={(e)=>setDeliveryNumber(e.currentTarget.value)}/>
        <Button color={"rgb(67, 132, 64)"} onClick={handleDeliveryNumber}>Register</Button>
      </InputFrame>
      <Title size={"1.25rem"}>운송사 등록</Title>
      <InputFrame>
        <Input width={"40%"} placeholder={"주문번호"} value={deliveryCompany} onChange={(e)=>setDeliveryCompany(e.currentTarget.value)}/>
        <Button color={"rgb(67, 132, 64)"} onClick={handleDeliveryCompany}>Register</Button>
      </InputFrame>
      <InputFrame>
        <Title size={"1.25rem"}>배송 확정</Title>
        <DeliveryItemFrame deliveryNumber={selectedOrder.deliveryNumber} deliveryCompany={selectedOrder.deliveryCompany} userName={selectedOrder.userName} date={selectedOrder.date} />
        <Button color={"rgb(67, 132, 64)"} onClick={clickSendDeliveryAPI}>등록하기</Button>
      </InputFrame>
    </Container>
  )
}