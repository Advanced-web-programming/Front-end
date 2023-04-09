import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import styled from "styled-components";

import { Main } from "./pages/main/Main";
import { Nav } from "./template/nav/Nav";
import { Footer } from "./template/footer/Footer";
import { DroneTemplate } from "./template/drone/DroneTemplate";
import { OrderTemplate } from "./template/drone/order/OrderTemplate";
import { Complete } from "./template/drone/order/Complete";
const NavPosition = styled.div`
  position: absolute;
  height: 112px;
  width: 100vw;
  z-index: 1;
`;

const FooterPosition = styled.footer`
  width: 100vw;
  height: 112px;
  padding: 0 268px;
`;

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavPosition>
          <Nav />
        </NavPosition>
        <Routes>
          <Route path="/" exact={true} element={<Main />} />
          <Route path="/drone" element={<DroneTemplate />} />
          <Route path="/drone/order" element={<OrderTemplate />} />
          <Route path="/drone/complete" element={<Complete />} />
        </Routes>
      </BrowserRouter>
      <FooterPosition>
        <Footer />
      </FooterPosition>
    </div>
  );
}
export default App;
