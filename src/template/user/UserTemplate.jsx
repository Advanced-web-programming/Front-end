import styled, {createGlobalStyle} from "styled-components"

import { SideBar } from "../../modules/User/SideBar";
import { Contents } from "../../modules/User/Contents";

const Container = styled.section`
  width: max(100vw, 1440px);
  background-color: rgb(14, 17, 22);
`;
const ContainerFrame = styled.div`
  padding: 120px 100px 0 180px;
  width: 1430px;
  min-height: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.4fr 1fr; 
`;

const SideBarFrame = styled.section`
  margin: 1rem;
`

const ContentsFrame = styled.article`
  margin: 1rem 1rem 1rem -0.75rem;
`

export function UserTemplate() {

  return(
    <Container>
      <ContainerFrame>
        <SideBarFrame>
          <SideBar />
        </SideBarFrame>
        <ContentsFrame>
          <Contents />
        </ContentsFrame>
      </ContainerFrame>
    </Container>
  )
}