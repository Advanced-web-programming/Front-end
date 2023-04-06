import styled from "styled-components";
import React, { useState } from "react";
import { Card } from "./Card";

const Container = styled.div`
  width: 50%;
  height: 130%;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
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
        <Card selectedMenu={selectedMenu} />
      ) : (
        <Text>서비스를 선택해주세요</Text>
      )}
    </Container>
  );
}
