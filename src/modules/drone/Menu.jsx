import styled from "styled-components";
import React from "react";

const Container = styled.div`
  width: 300px;
  height: 477px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 40px;
  margin: 0 23px 0 0;
`;

const Text = styled.p`
  font-size: 27px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-bottom: 30px;
`;

const MenuItem = styled.button`
  font-size: 23px;
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? "black" : "#999")};
  background-color: white;
  border: none;
  margin: 8px;
  font-weight: 530;
`;

export function Menu({ setSelectedMenu, selectedMenu }) {
  return (
    <Container>
      <Text>
        어떤 서비스가
        <br />
        필요하신가요?
      </Text>
        <MenuItem
          isSelected={selectedMenu === "menu1"}
          onClick={() => setSelectedMenu("menu1")}
        >
          감시 ∙ 정찰 ∙ 수색
        </MenuItem>
        <MenuItem
          isSelected={selectedMenu === "menu2"}
          onClick={() => setSelectedMenu("menu2")}
        >
          물류 ∙ 운송 ∙ 구조
        </MenuItem>
        <MenuItem
          isSelected={selectedMenu === "menu3"}
          onClick={() => setSelectedMenu("menu3")}
        >
          방역 ∙ 방제 ∙ 살포
        </MenuItem>
        <MenuItem
          isSelected={selectedMenu === "menu4"}
          onClick={() => setSelectedMenu("menu4")}
        >
          방송 ∙ 공연
        </MenuItem>
        <MenuItem
          isSelected={selectedMenu === "menu5"}
          onClick={() => setSelectedMenu("menu5")}
        >
          취미 ∙ 교육
        </MenuItem>
    </Container>
  );
}
