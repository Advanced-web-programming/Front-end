import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

const Container = styled.section`
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  padding: 16px 24px;
  font-size: 14px;
  cursor: pointer;
`;

export function ButtonModule() {
  return (
    <Container>
      <Link to="/drone">
        <Button bgColor={"#F55E41"} color={"#FFFFFF"} border={"none"}>
          함께 하기
        </Button>
      </Link>
      <Outlet />
      <Button
        bgColor={"#0B0B0E"}
        color={"#FFFFFF"}
        border={"1px solid #2C2C35"}
      >
        더보기
      </Button>
    </Container>
  );
}
