import styled from "styled-components"
import { Card } from "./Card";

import { orderBasicInfo } from "../../static/static";

const Container = styled.header`
  margin: 0 230px 0 230px;
  height: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export function OrderContents() {
  return(
      <Container>
        {
          orderBasicInfo.map((item)=>{
            return <Card key={item.id} item = {item}/>
          })
        }
      </Container>
  )
}