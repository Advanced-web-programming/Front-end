import styled from "styled-components"

import cardIcon from "../../assets/Home/cardIcon.png";

const Container = styled.section`
 height: 240px;
 width: 340px;
 background-color: #F8F8F9;
 border: 1px solid #F8F8F9;
 box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

 &:hover{
  border: 1px solid #E9E9EC;
  background-color: #FFFFFF;
 }
`
const CardImg = styled.img`
  margin: 32px;
  width: 32px;
  height: 32px;
`
const Text = styled.div`
  color: ${props=>props.color};
  font-size: ${props=>props.size};
  font-weight: ${props=>props.weight};
  margin: 4px 32px 4px 32px;
  width: 276px;
`


export function Card(props) {

  return(
    <Container>
      <CardImg src={cardIcon} />
      <Text color={"#9F9FAC"} size={"18px"} weight={"400"}>{props.title}</Text> 
      <Text color={"#0B0B0E"} size={"16px"} weight={"400"}>{props.content}</Text>
    </Container>
  )
}