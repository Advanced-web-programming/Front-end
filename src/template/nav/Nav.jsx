import styled from "styled-components";
import Logo from "../../assets/Logo.png";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { LoginModal } from "../loginModal/LoginModal";
import { userInfoAtom } from "../../atoms/userAtom";
import { useRecoilValue } from "recoil";

import { informationRefAtom, projectRefAtom, currentUrl, showLogin } from "../../atoms/utilAtom";
import { useRecoilState } from "recoil";

const LogoPosition = styled.img`
  width: 154px;
  height: 73px;
`;

const Container = styled.div`
  width: 1250px;
  margin: 0 auto;
`

const NavMenuPosition = styled.div`
  height: 100%;
  margin: 23px 0 0 55px;
  display: flex;
  flex-direction: row;
  justify-contents: flex-start;
  align-items: center;
  gap: 16px;
`;

const NavItemLink = styled(Link)`
  color: #9f9fac;
  text-decoration: none;
  padding: 8px 16px;
  gap: 8px;
  &:hover{
    color: #ffffff;
  }
`;

const Login = styled.button`
  padding: 0px;
  gap: 16px;
  border: none;
  background: #f55e41;
  color: #ffffff;
  width: 80px;
  height: 40px;
  font-size: 14px;
  margin-left: auto;
`;

const Text = styled.div`
  margin-left: auto;
  color: ${props=>props.color};
  font-size: ${props=>props.size};
  font-weight: ${props=>props.weight};
`

export function Nav() {
  const [show, setShow] = useRecoilState(showLogin);
  const userInfo = useRecoilValue(userInfoAtom);
  const projectRef = useRecoilValue(projectRefAtom);
  const infoRef = useRecoilValue(informationRefAtom);
  const [path, setPath] = useRecoilState(currentUrl);

  const toggleLogin = () => {
    setShow(true);
  };

  const pathHandler = (p) =>{
    setPath(p)
  }

  return (
    <Container>
      <NavMenuPosition>
        <LogoPosition src={Logo} />
        <NavItemLink to="/" onClick={()=>{
          pathHandler("/")
        }}>
          Home
        </NavItemLink>
        {(path !== "/user" || window.location.pathname === "/") && <NavItemLink onClick={()=>{
          pathHandler("/information")
          infoRef.refEvent()
        }}>회사소개</NavItemLink>}
        {(path !== "/user" || window.location.pathname === "/") && <NavItemLink onClick={()=>{
          pathHandler("/project")
          projectRef.refEvent()
        }}>프로젝트 소개</NavItemLink>}
        <NavItemLink to="/user" onClick={()=>pathHandler("/user")}>고객정보</NavItemLink>
        {userInfo.userId === "" ? <Login onClick={toggleLogin}>로그인</Login> : <Text color={"#e6edf3"} size={"0.9rem"} weight={"600"}>{userInfo.userName} 고객님</Text>}
      </NavMenuPosition>
      {show ? <LoginModal onClose={setShow} /> : null}
    </Container>
  );
}
