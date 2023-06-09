import styled from "styled-components";

import { useState } from "react";
import { Menu } from "../../modules/drone/Menu";
import { Product } from "../../modules/drone/Product";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
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
