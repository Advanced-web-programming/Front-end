import styled from "styled-components"

import DominoDrone from "../../assets/project/DominoDrone.png";
import DroneAcademy from "../../assets/project/DroneAcademy.png";
import DroneFarm from "../../assets/project/DroneFarm.png"
import DroneShow from "../../assets/project/DroneShow.png"

const Container = styled.section`
  width: 100%;
  margin: 0;
  border: 1.5px solid #e4e4e4;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &:hover {
    border: 1.5px solid #838383;
    transition: 0.7s;
    cursor: pointer;
  }
`

const Head = styled.div`
  height: 182px;
  width: 100%;
  padding: 40px 40px 0 40px;
  background-color: #ffffff;
`
const Title = styled.div`
  font-size: 24px;
  font-color: #000000;
  font-weight: 500;
  margin: 0 0 7px 0;
`
const Content = styled.div`
  font-size: 18px;
  color: #595969;
`

const CardImg = styled.img`
  height: 350px;
  width: 100%;
  margin: 0;
`

export function Card(props) {
  const imgRender = (num) =>{
    if(num === 1) return DroneShow
    else if(num === 2) return DroneAcademy
    else if(num === 3) return DroneFarm
    else if(num === 4) return DominoDrone
  }
  return(
    <Container>
      <Head>
        <Title>{props.title}</Title>
        <Content>{props.content}</Content>
      </Head>
      <CardImg src={imgRender(props.id)} alt="qwe"/>
    </Container>
  )
}