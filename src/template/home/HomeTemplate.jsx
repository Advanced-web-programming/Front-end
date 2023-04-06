import styled, { keyframes } from "styled-components";
import Background from "../../assets/background/Main.png";
import TitleImg from "../../assets/TitleImg.png";

import { Title } from "../../modules/home/Title";
import { ButtonModule } from "../../modules/home/ButtonModule";

const rotate_image = keyframes`
  0% {
    transform: translateY(40px); 
    opacity: 0; 
  }
  100% {
    transform: translateY(0px);   
    opacity: 1; 
  }
`

const Container = styled.div`
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  padding: 135px 0 80px;
  color: white;
  width: 1430px;
  margin: 0 auto;
`;

const TitlePosition = styled.div`
  width: 60rem;
  height: 124px;
  margin: 125px 0 0 217px;
  animation: ${rotate_image} 1s ease-in-out;
`;

const SubButtonPosition = styled.div`
  margin: 50px 0 0 217px;
  width: 12.5rem;
  height: 60px;
  animation: ${rotate_image} 1s ease-in-out;
`;
const TitleImgPosition = styled.img`
  height: 400px;
  margin: 30px 217px 0 217px;
  opacity: 1;
  animation: ${rotate_image} 1s ease-in-out;
`;

export function HomeTemplate() {
  return (
    <Container bgImg={Background}>
      <TitlePosition>
        <Title />
      </TitlePosition>
      <SubButtonPosition>
        <ButtonModule />
      </SubButtonPosition>
      <TitleImgPosition src={TitleImg} />
    </Container>
  );
}
