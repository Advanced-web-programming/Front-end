import React from 'react';
import styled from 'styled-components';

import { Main } from './pages/main/Main';
import { LoginModal } from './template/loginModal/LoginModal';
import { Nav } from './template/nav/Nav';

const NavPosition = styled.div`
  position: absolute;
  height: 112px;
  width: 60%;
  margin: 23px 20% 0 20%;
  //   border: 1px solid white;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

const Footer = styled.footer`
  width: 90%;
  height: 112px;
  margin: 23px 5%;
`;

function App() {
  return (
    <>
      <NavPosition>
        <Nav />
      </NavPosition>
      <LoginModal />
      <Main />

      <Footer></Footer>
    </>
  );
}

export default App;
