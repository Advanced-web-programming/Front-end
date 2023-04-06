import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drone from "./pages/drone/Drone";

import { Main } from "./pages/main/Main";
import { LoginModal } from "./template/loginModal/LoginModal";
import { Nav } from "./template/nav/Nav";
import { Footer } from "./template/footer/Footer";

const NavPosition = styled.div`
  position: absolute;
  height: 112px;
  width: 80%;
  margin: 23px 10% 0 10%;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
`;

const FooterPosition = styled.footer`
  display: flex;
  width: 80%;
  height: 112px;
  margin: 23px 10% 0 10%;
  align-items: center;
  justify-content: space-evenly;
`;

function App() {
  return (
    <>
      <NavPosition>
        <Nav />
      </NavPosition>
      {/* <LoginModal /> */}
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/drone" element={<Drone />} />
        </Routes>
      </BrowserRouter>

      <FooterPosition>
        <Footer />
      </FooterPosition>
    </>
  );
}

export default App;
