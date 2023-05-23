import styled from "styled-components";

import { authMenuItem } from "../../static/static";

import { selectedMenu } from "../../atoms/settingAtom";
import { useRecoilState } from "recoil";

import { Navigate, useNavigate} from "react-router-dom";
import { useResetRecoilState } from "recoil";
import { userInfoAtom } from "../../atoms/userAtom";

const Container = styled.div`
  width: 100%;
  height: 90%;
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
    color: ${(props) => (props.isHover? "rgb(200, 70, 60)" : "rgb(71, 127, 239)")};
  }
  &:hover::before {
    color: ${(props) => (props.isHover? "rgb(200, 70, 60)" : "rgb(71, 127, 239)")};
  }
`

export function SideBar() {
  const [menu, setMenu] = useRecoilState(selectedMenu);
  const resetUSer = useResetRecoilState(userInfoAtom);
  const resetMenu = useResetRecoilState(selectedMenu);

  const navigate = useNavigate();

  const clickHandler = (id) => {
    setMenu(id);
  }

  const clickLogout = () =>{
    resetMenu();
    resetUSer();
    navigate("/auth")
  }

  return(
    <Container>
      <Title >관리자 모드</Title>
      {
        authMenuItem.map((item)=>{
          return <MenuItem key={item.id} onClick={()=>clickHandler(item.id)} color={menu === item.id ? "rgb(71, 127, 239)" : "#e6edf3"}>{item.title}</MenuItem>
        })
      }
      <MenuItem color={"rgb(200, 70, 60)"} isHover={true} onClick={clickLogout}>나가기</MenuItem>
    </Container>
  )
}

