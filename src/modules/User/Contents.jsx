import styled from "styled-components";

import { ProfileContents } from "./ProfileContents";
import { OrderContents } from "./OrderContents";
import { DeliveryContents } from "./DeliveryContents";

import { menuItems } from "../../static/static";

import { selectedMenu } from "../../atoms/settingAtom";
import { useRecoilState } from "recoil";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-itens: flex-start;
  justify-content: flex-start;
`;

const Title = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
  padding-left: 15px;
  padding-bottom: 10px;
  width: 100%;
  border-bottom: 1px solid rgb(33, 37, 43);
`;

export function Contents() {
  const [menu, setMenu] = useRecoilState(selectedMenu);

  return(
    <Container>
      <Title>{ menuItems[menu].title }</Title>
      { menu === 0 && <ProfileContents /> }
      { menu === 1 && <DeliveryContents />}
    </Container>
  )
}