import styled from "styled-components";
import Background from "../../assets/background/Main.png";
import Project from "../../assets/background/Project.png";

import { Main } from "../../modules/drone/Main";

const BackContainer = styled.div`
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center;
  padding: 135px 0;
  width: 100%;
  height: calc(100vh - 345px);
  position: relative;
  z-index: 1;
`;

const Container = styled.div`
  background-image: url(${(props) => props.bgImg});
  background-size: 100% auto;
  background-position: center;
  width: 100%;
  height: 80vh;
  margin: -7vh 0 auto;
  position: relative;
  z-index: 2;
`;

export function DroneTemplate() {
  return (
    <BackContainer bgImg={Background}>
      <Container bgImg={Project}>
        <Main />
      </Container>
    </BackContainer>
  );
}
