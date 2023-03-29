import React from 'react';
import styled from 'styled-components';

import {Main} from './pages/main/Main'

const NavPosition = styled.div`
  position: absolute;
  height: 112px;
  width: 90%;
  margin: 23px 5%;
`

const Footer = styled.footer`
  width: 90%;
  height: 112px;
  margin: 23px 5%;
`

function App() {
  return (
    <>
      <NavPosition>
      
      </NavPosition>

      <Main />

      <Footer>

      </Footer>
    </>
  );
}

export default App;
