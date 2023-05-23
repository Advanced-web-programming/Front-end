import styled, {createGlobalStyle} from "styled-components"

import { SideBar } from "../../modules/auth/SideBar";
import { Contents } from "../../modules/auth/Contents";

const Container = styled.section`
  width: max(100vw, 1440px);
  background-color: rgb(14, 17, 22);
`;
const ContainerFrame = styled.div`
  padding: 0px 50px 0 60px;
  width: 1430px;
  min-height: 700px;
  max-height: 2000px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 0.3fr 1fr; 
`;

const SideBarFrame = styled.section`
  margin: 1rem;
`

const ContentsFrame = styled.article`
  margin: 1rem 1rem 1rem -0.75rem;
`

export function AuthTemplate() {

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