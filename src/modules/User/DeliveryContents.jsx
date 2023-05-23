import styled from "styled-components";

import { deliveryComplete } from "../../static/static";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-itens: flex-start;
  justify-content: flex-start;
  padding: 0 1rem;  
`;
const Title = styled.div`
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 15px 0;
  padding-left: 15px;
  width: 100%;
`;
const ItemFrame = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 13px;
  gap: 20px;
`
const Text = styled.div`
  color: ${props=>props.color};
  font-size: ${props=>props.size};
  font-weight: ${props=>props.weight};
`

export function DeliveryContents() {

  return(
    <Container>
      <Title>배송중</Title>
        {
          deliveryComplete.map((item)=>{
            return (
              <ItemFrame>
                <Text color={"rgb(71, 127, 239)"} size={"0.8rem"} font-weight={"700"}>배송번호: {item.orderNumber}</Text>
                <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>날짜: {item.day}</Text>
                <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>주소: {item.address}</Text>
                <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>수령인: {item.user}</Text>
                
              </ItemFrame>
            )
          })
        }
      <Title>배송완료</Title>
      {
          deliveryComplete.map((item)=>{
            return (
              <ItemFrame>
                <Text color={"rgb(71, 127, 239)"} size={"0.8rem"} font-weight={"700"}>배송번호: {item.orderNumber}</Text>
                <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>날짜: {item.day}</Text>
                <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>주소: {item.address}</Text>
                <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>수령인: {item.user}</Text>
                
              </ItemFrame>
            )
          })
        }
    </Container>
  )
}