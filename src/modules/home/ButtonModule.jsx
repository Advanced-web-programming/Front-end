import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

import { orderRefAtom } from "../../atoms/utilAtom";
import { useRecoilValue } from "recoil";

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
  margin-right:auto;
  box-shadow: rgba(255, 255, 255, 0.15) 0px 0px 5px 0px;
`;

export function ButtonModule() {
  const orderRef = useRecoilValue(orderRefAtom)
  return (
    <Container>
        <Button onClick={orderRef.refEvent} bgColor={"#F55E41"} color={"#FFFFFF"} border={"none"}>
          함께 하기
        </Button>

      <Outlet />
        {/* <Button
          bgColor={"#0B0B0E"}
          color={"#FFFFFF"}
          border={"1px solid #2C2C35"}
        >
          더보기
        </Button> */}
    </Container>
  );
}
