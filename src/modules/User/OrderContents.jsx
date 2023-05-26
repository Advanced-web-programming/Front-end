import styled from "styled-components";

import { orderBasicInfo } from "../../static/static";
import { allPost } from "../../atoms/orderAtom";

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
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 13px;
  gap: 10px;
`
const Text = styled.div`
  color: ${props=>props.color};
  font-size: ${props=>props.size};
  font-weight: ${props=>props.weight};
`
const Button = styled.button`
  font-size: 0.7rem;
  border: 1px solid rgb(49, 54, 60);
  background-color: rgb(34, 38, 44);
  border-radius: 4px;
  padding: 3px 12px;
  color: white;
  font-weight: 600;
  margin-left: auto;
`


export function Item(props) {

  return(
    <ItemFrame>
      <Text color={"rgb(71, 127, 239)"} size={"0.8rem"} font-weight={"700"}>주문번호: 1111111 / 아리온 스콜피온</Text>
      <Text color={"#e6edf3"} size={"0.8rem"} font-weight={"700"}>날짜: 2023-05-21</Text>
      <Button>취소</Button>
    </ItemFrame>
  )
}


export function OrderContents() {
  // const orderBasicInfo = useRecoilValue(allPost);

  return(
    <Container>
      {
        orderBasicInfo.map((items)=>{
          return (
            <>
              <Title key={items.id} borderRadious={items.id-1 === 0 ? true : false }>{items.title}</Title>
              {
                items.map((item)=>{
                  return <Item item={item}/>
                })
              }
            </>
          )
        })
      }
    </Container>
  )
}