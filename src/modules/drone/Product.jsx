import styled from "styled-components";
import React, { useState } from "react";
import { Card } from "./Card";

const Container = styled.section`
  width: 810px;
  height: 600px;
  flex-direction: row;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
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
