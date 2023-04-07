import styled from "styled-components";
import React, { useState } from "react";
import { CardContainer } from "./CardContainer";

const Container = styled.div`
  width: 40rem;
  height: 100%;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
`;

const Text = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: black;
`;

export function Product({ selectedMenu }) {
  return (
    <Container>
      {selectedMenu ? (
        <CardContainer selectedMenu={selectedMenu} />
      ) : (
        <Text>서비스를 선택해주세요</Text>
      )}
    </Container>
  );
}
