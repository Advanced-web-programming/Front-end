import styled from "styled-components";
import Background from "../../../assets/background/Main.png";
import Project from "../../../assets/background/Project.png";

import { Outlet, Link } from "react-router-dom";

const BackContainer = styled.div`
  padding: 135px 0 0 0;
  width: 100%;
`;

const Container = styled.div`
  background-image: url(${(props) => props.bgImg});
  background-size: 100% auto;
  background-position: center;
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  background-color: white;
  width: 1200px;
  height: calc(100% - 5rem);
  padding: 12px;
  border-radius: 3xl;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Message = styled.p`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const MainButton = styled.button`
  width: 250px;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: white;
  background-color: #3a3a3a;
  border-radius: 10px;
  margin-top: 1rem;
`;

export function Complete() {
  return (
    <BackContainer bgImg={Background}>
      <Container bgImg={Project}>
        <InnerContainer>
          <Message>상담 신청이 완료되었습니다</Message>
          <Link to="/">
            <MainButton>메인으로</MainButton>
          </Link>
          <Outlet />
        </InnerContainer>
      </Container>
    </BackContainer>
  );
}
