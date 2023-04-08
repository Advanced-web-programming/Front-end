import styled from "styled-components"

import { Card } from "./Card"
import { cardInfo } from "../../static/static"

const Container = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar{
    display: none;
  }
`

export function Contents() {

  return(
    <Container>
      {cardInfo.map((value)=>{
        return <Card key={value.id} title={value.title} content={value.content} />
      })}
    </Container>
  )
}