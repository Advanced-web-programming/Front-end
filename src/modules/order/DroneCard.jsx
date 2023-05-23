import styled from "styled-components"
import {rotate_image,  appear, appear_description } from "../../utils/anmation";
import { useRecoilState } from "recoil";
import { selectedCategory, selectedDrone } from "../../atoms/orderAtom";

const Drones = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props=>props.borderColor};
  border-radius: 5px;
  box-shadow: ${props=>(props.boxShodow && "rgba(0, 0, 0, 0.24) 0px 3px 8px")};
  padding: 10px;
  &:hover::before {
    content: '';
    position: absolute;
    curser: pointer;
    top:0;
    width: 100%;
    height: 100%;
    background-color: rgba(200, 200, 200, 0.7);
  }
`
const Text = styled.div`
  color: ${props=>props.color};
  font-size: ${props=>props.size};
  font-weight: ${props=>props.weight};
  margin-top: ${props=>props.marginTop};
  opacity: 1;
  ${Drones}:hover & {
    opacity: 0.1;
  }
`
const NonHoverText = styled.div`
  color: ${props=>props.color};
  font-size: ${props=>props.size};
  font-weight: ${props=>props.weight};
  margin-top: ${props=>props.marginTop};
`
const Description = styled.div`
  position: absolute;
  top:19%;
  opacity: 0;
  ${Drones}:hover & {
    z-index: 99;
    opacity: 1;
    animation: ${appear_description} 1s ease;
  }
`
const Img = styled.img`
  width: 110px;
  height: 80px;
`
export function DroneCard(props) {
  const [drone, setDrone] = useRecoilState(selectedDrone);
  const [category, setCategory] = useRecoilState(selectedCategory);
  const clickSetDrone = () =>{
    setDrone({
      categoryId: category.id,
      itemId: props.item.id
    })
  }
  return(
    <Drones onClick={clickSetDrone} borderColor={drone.itemId === props.item.id ? "red" : 'black'} boxShodow={drone.itemId === props.item.id ? true : false}>
      <Img src={props.item.image} />
      <Text  color={"black"} size={"16px"} weight={"700"} marginTop={"20px"}>{props.item.title}</Text>
      <Text  color={"#808080"} size={"14px"} weight={"600"} marginTop={"10px"}>{props.item.type}</Text>
      <Description>
        <NonHoverText color={'black'} size={"16px"} weight={"500"} marginTop={"5px"}>제조사: {props.item.decription.made}</NonHoverText>
        <NonHoverText color={'black'} size={"16px"} weight={"500"} marginTop={"5px"}>자체중량: {props.item.decription.weight}</NonHoverText>
        <NonHoverText color={'black'} size={"16px"} weight={"500"} marginTop={"5px"}>최대속도: {props.item.decription.speed}</NonHoverText>
        <NonHoverText color={'black'} size={"16px"} weight={"500"} marginTop={"5px"}>비행속도: {props.item.decription.time}</NonHoverText>
      </Description>
    </Drones>
  )
}