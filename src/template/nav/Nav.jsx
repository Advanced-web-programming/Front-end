import styled from 'styled-components';
import Logo from '../../assets/Logo.png';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { LoginModal } from '../loginModal/LoginModal';

const LogoPosition = styled.img`
  width: 154px;
  height: 73px;
`;

const NavMenuPosition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  width: max-content;
`;

const NavItemLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #9f9fac;
  text-decoration: none;
  padding: 8px 16px;
  gap: 8px;
  width: 4rem;
  height: 1rem;
`;

const Login = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;
  border: none;
  background: #f55e41;
  color: #ffffff;
  width: 80px;
  height: 40px;
  font-size: 14px;
`;

export function Nav() {
  useEffect(() => {
    console.log(window.location.href);
  });
  return (
    <>
      <NavMenuPosition>
        <LogoPosition src={Logo} />
        <BrowserRouter>
          <NavItemLink to="/">메인</NavItemLink>
          <NavItemLink to="/info">회사소개</NavItemLink>
          <NavItemLink to="/summary">사업개요</NavItemLink>
          <NavItemLink to="/recruitment">인재채용</NavItemLink>
          <NavItemLink to="/help">고객지원</NavItemLink>
          {/* <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/photo" component={Photo} />
              <Route path="/rooms" component={Rooms} />
            </Switch> */}
        </BrowserRouter>
      </NavMenuPosition>
      <Login>로그인</Login>
      {/* <LoginModal /> */}
    </>
  );
}
