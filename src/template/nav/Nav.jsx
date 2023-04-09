import styled from "styled-components";
import Logo from "../../assets/Logo.png";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { LoginModal } from "../loginModal/LoginModal";

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
  margin: 23px 0 0 105px;
  display: flex;
  flex-direction: row;
  justify-contents: flex-start;
  align-items: center;
  gap: 16px;
`;

const NavItemLink = styled(Link)`
  width: 100px;
  color: #9f9fac;
  text-decoration: none;
  padding: 8px 16px;
  gap: 8px;
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

export function Nav() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Container>
      <NavMenuPosition>
        <LogoPosition src={Logo} />
        <NavItemLink to="/" style={{ color: "#ffffff" }}>
          Home
        </NavItemLink>
        <NavItemLink to="/info">회사소개</NavItemLink>
        <NavItemLink to="/summary">사업개요</NavItemLink>
        <NavItemLink to="/recruitment">인재채용</NavItemLink>
        <NavItemLink to="/help">고객지원</NavItemLink>
        <Login onClick={toggleLogin}>로그인</Login>
      </NavMenuPosition>
      {showLogin ? <LoginModal onClose={setShowLogin} /> : null}
    </Container>
  );
}
