import styled from "styled-components";

import { useState } from "react";
import { Menu } from "../../modules/drone/Menu";
import { Product } from "../../modules/drone/Product";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  flex-direction: row;
  padding-top: 100px;
  justify-content: center;
`;

export function Main() {
  const [selectedMenu, setSelectedMenu] = useState("");
  return (
    <MainContainer>
      <Menu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <Product selectedMenu={selectedMenu} />
    </MainContainer>
  );
}
