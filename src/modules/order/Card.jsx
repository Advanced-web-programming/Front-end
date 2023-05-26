import styled from "styled-components"

import DominoDrone from "../../assets/project/DominoDrone.png";
import DroneAcademy from "../../assets/project/DroneAcademy.png";
import DroneFarm from "../../assets/project/DroneFarm.png"
import DroneShow from "../../assets/project/DroneShow.png"

import Drone1 from "../../assets/order/Drone1.png"
import Drone2 from "../../assets/order/Drone2.png"
import Drone3 from "../../assets/order/Drone3.png"
import Drone4 from "../../assets/order/Drone4.png"
import Drone5 from "../../assets/order/Drone5.png"

import { useScroll } from "../../utils/useScroll";
import { orderModalOpen, selectedCategory } from "../../atoms/orderAtom";
import { useRecoilState } from "recoil";

import {rotate_image,  appear } from "../../utils/anmation";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  position: relative; 
  padding: 0;
  width: 265px;
  height: 100%;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  cursor: pointer;
  animation: ${rotate_image} 1s ease-in-out;

  &:hover::before {
    content: '';
    position: absolute;
    curser: pointer;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    animation: ${appear} 1s ease;
    box-shadow: rgba(130, 140, 150, 0.2) 0px 8px 24px;
  }
  &::after {
    content: '';
    position: absolute;
    curser: pointer;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: rgba(140, 150, 160, 0.2) 0px 8px 24px;
  }
`;

const Comment = styled.div`
  z-index: 1;
  position: absolute;
  top: 45%;
  opacity: 1;
  border-bottom: 1px solid rgba(0, 0, 0);
  color: rgba(0, 0, 0);
  font-weight: 700;
  font-size: 20px;
  padding: 8px 16px;
  ${Container}:hover & {
    opacity: 0;
  }
`

const Button = styled.div`
  margin: auto 0;
  opacity: 0;
  border-bottom: 1px solid rgba(80, 80, 80);
  color: rgba(80, 80, 80);
  font-weight: 700;
  font-size: 20px;
  padding: 8px 16px;
  ${Container}:hover & {
    z-index: 1;
    opacity: 1;
    animation: ${rotate_image} 1s ease;
  }
`

export function Card(props) {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useRecoilState(orderModalOpen);
  const [category, setCategory] = useRecoilState(selectedCategory);
  const imgRender = (num) =>{
    if(num === 1) return Drone1
    else if(num === 2) return Drone2
    else if(num === 3) return Drone3
    else if(num === 4) return Drone4
    else if(num === 5) return Drone5
  }

  const onClickModal = () => {
    handleButton(props.item)
    setIsOpen(!isOpen)
  }

  const handleButton = (item) => {
    setCategory(item)
  }
  
  return(
    <>
      {
        scrollY > 2900 ?
        <Container bgImg={imgRender(props.item.id)} onClick={onClickModal}>
          <Comment>{props.item.title}</Comment>
          <Button>구매하기</Button>
        </Container>
        :
        <></>
      }
    </>
  )
}