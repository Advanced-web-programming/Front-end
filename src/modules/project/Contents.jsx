import styled from "styled-components"

import { projectCardInfo } from "../../static/static";

import { Card } from "./Card";

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 510px 510px;
  gap: 40px;
`

export function Contents() {

  return(
    <Container>
      {
        projectCardInfo.map((info)=>{
          return <Card key={info.id} id={info.id} title={info.title} content={info.content} img={info.img}/>
        })
      }

    </Container>
  )
}