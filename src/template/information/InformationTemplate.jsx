import { useEffect, useRef } from "react";

import styled from "styled-components";
import InformationImg from "../../assets/InformationImg.png";

import { Title } from "../../modules/information/Title";
import { Contents } from "../../modules/information/Contents";

import { informationRefAtom } from "../../atoms/utilAtom";
import { useRecoilState } from "recoil";

const Container = styled.div`
  width: max(100vw, 1440px);
  background-color: #ffffff;
`;
const Content = styled.div`
  padding: 84px 0 64px;
  width: 1430px;
  margin: 0 auto;
`;

const TitlePosition = styled.header`
  margin: 0 0 0 230px;
  height: 157px;
`;

const InformationScroll = styled.main`
  margin: 20px 0 100px 230px;
  height: 270px;
  overflow-x: scroll;
  padding: 0 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const InformationImgPosition = styled.img`
  margin: 0 230px;
  height: 400px;
  width: max-content;
`;

export function Information() {
  const [infotRef, setInfoRef] = useRecoilState(informationRefAtom)
  const ref = useRef();
  const handleButtonClick = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(()=>{
    setInfoRef({
      ref: ref.current,
      refEvent: handleButtonClick,
    });
  }, [setInfoRef])
  return (
    <Container ref={ref}>
      <Content>
        <TitlePosition>
          <Title />
        </TitlePosition>
        <InformationScroll>
          <Contents />
        </InformationScroll>
        <InformationImgPosition src={InformationImg} />
      </Content>
    </Container>
  );
}
