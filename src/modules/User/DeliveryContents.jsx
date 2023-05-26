import styled from "styled-components";

import { deliveryComplete } from "../../static/static";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../atoms/userAtom";
import { getUserDeliveryList } from "../../atoms/userAtom";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-itens: flex-start;
  justify-content: flex-start;
  border: 1px solid rgb(49, 54, 60);
  border-radius: 10px;
`;
const Title = styled.div`
  color: #e6edf3;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 5px 13px;
  background-color: rgb(23, 27, 33);
  border-top: 1px solid rgb(49, 54, 60);
  border-bottom: 1px solid rgb(49, 54, 60);
  border-radius: ${(props) => props.borderRadious ? "6px 6px 0px 0px" : "0px"};
`
const ItemFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr 1.3fr 2fr 1fr;
  flex-direction: row;
  align-items: center;
  margin: 10px 13px;
  gap: 25px;
`
const Text = styled.div`
  color: ${props=>props.color};
  font-size: ${props=>props.size};
  font-weight: ${props=>props.weight};
`

export function DeliveryContents() {
  const userInfo = useRecoilValue(userInfoAtom)

  const userNameDeliveryList = useRecoilValue(getUserDeliveryList(userInfo.userName));

  return(
    <Container>
      <Title borderRadious={true}>승인대기</Title>
      {/* <Title>승인대기</Title> */}
        {
          userNameDeliveryList.map((item)=>{
            return (
              item.state === "승인대기" && 
              <ItemFrame>
                <Text color={"rgb(71, 127, 239)"} size={"0.8rem"} font-weight={"700"}>배송번호: {item.orderNumber}</Text>
                <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>기기: {item.title}</Text>
                <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>날짜: {item.date.slice(0, 10)}</Text>
                <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>E-mail: {userInfo.userId}</Text>
                <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>수령인: {item.userName}</Text> 
              </ItemFrame>
            )
          })
        }
        <Title borderRadious={false}>배송준비</Title>
      {/* <Title>배송준비</Title> */}
        {
          userNameDeliveryList.map((item)=>{
            return (
              item.state === "배송준비" && 
              <ItemFrame>
                <Text color={"rgb(71, 127, 239)"} size={"0.8rem"} font-weight={"700"}>배송번호: {item.orderNumber}</Text>
                <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>기기: {item.title}</Text>
                
                <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>날짜: {item.date.slice(0, 10)}</Text>
                <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>E-mail: {userInfo.userId}</Text>
                <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>수령인: {item.userName}</Text> 
              </ItemFrame>
            )
          })
        }
        <Title borderRadious={false}>배송완료</Title>
      {/* <Title>배송완료</Title> */}
      {
          userNameDeliveryList.map((item)=>{
            return (
              item.state === "완료" &&
              <ItemFrame>
                <Text color={"rgb(71, 127, 239)"} size={"0.8rem"} font-weight={"700"}>배송번호: {item.orderNumber}</Text>
                <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>기기: {item.title}</Text>
                
                <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>날짜: {item.date.slice(0, 10)}</Text>
                <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>E-mail: {userInfo.userId}</Text>
                <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>수령인: {item.userName}</Text>
                
              </ItemFrame>
            )
          })
        }
    </Container>
  )
}