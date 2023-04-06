import styled from "styled-components";
import Project from "../../assets/background/Project.png";

import { Contents } from "../../modules/project/Contents";
import { Title } from "../../modules/project/Title";

const Container = styled.div`
  width: 100vw;
  background-color: #f8f8f9;
`;

const Content = styled.div`
padding: 84px 0 64px;
  width: 1430px;
  margin: 0 auto;
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
`;

const Head = styled.header`
  margin: 0 820px 30px 230px;
  height: 94px;
  flex-direction: column;
  align-items: center;
  padding: 0px;
`;

const Main = styled.main`
  margin: 0 0 0 230px;;
  height: 1105px;
`;

export function ProjectTemplate() {
  return (
    <Container>
      <Content bgImg={Project}>
        <Head>
          <Title/>
        </Head>
        <Main>
          <Contents />
        </Main>
      </Content>
    </Container>
  );
}
