import styled from "styled-components";

import { menuItems } from "../../static/static";

import { selectedMenu } from "../../atoms/settingAtom";
import { useRecoilState } from "recoil";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-itens: flex-start;
  justify-content: flex-start;
  gap: 15px;
`;

const Title = styled.div`
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
  padding-left: 4px;
`;

const MenuItem = styled.div`
  position: relative;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 8px 12px;
  background-color: rgb(27, 31, 35);
  color: ${(props) => props.color};
  border-radius: 10px;
  cursor: pointer;
  margin-right: 10px;
  
  &::before {
    content: '';
    position: absolute;
    top: 7px;
    left: -10px;
    bottom: 7px;
    width: 4px;
    border-radius: 4px;
    background-color: ${(props) => props.color};
  }
  &:hover {
    color: rgb(71, 127, 239);
  }
  &:hover::before {
    background-color: rgb(71, 127, 239);
  }

`
export function SideBar() {
  const [menu, setMenu] = useRecoilState(selectedMenu);

  const clickHandler = (id) => {
    setMenu(id);
  }

  return(
    <Container>
      <Title >임혜균 고객님</Title>
      {
        menuItems.map((item)=>{
          return <MenuItem key={item.id} onClick={()=>clickHandler(item.id)} color={menu === item.id ? "rgb(71, 127, 239)" : "#e6edf3"}>{item.title}</MenuItem>
        })
      }
    </Container>
  )
}