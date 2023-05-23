import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import styled from "styled-components";

import { Main } from "./pages/main/Main";
import { Nav } from "./template/nav/Nav";
import { Footer } from "./template/footer/Footer";
import { UserTemplate } from "./template/user/UserTemplate"; 
import { AuthTemplate } from "./template/auth/AuthTemplate";

import { ProtectedRoute, PrivateRoute } from "./utils/protectedRoute";

import { useRecoilValue } from "recoil";
import { authSelector } from "./atoms/authAtom";

const NavPosition = styled.div`
  position: absolute;
  width: 100vw;
  z-index: 1;
`;

const FooterPosition = styled.footer`
  width: 100vw;
  height: 112px;
  padding: 0 268px;
`;

function App() {
  const isAuth = useRecoilValue(authSelector);
  return (
    <div>
      <BrowserRouter>
        {isAuth ?<></> : <NavPosition><Nav /></NavPosition>}
        <Routes>
          <Route path="/" exact={true} element={
              <Main />
          } />
          <Route path='/user' element={
            <ProtectedRoute>
              <UserTemplate/>
            </ProtectedRoute>
          } />
          <Route path='/auth' element={
            <PrivateRoute>
              <AuthTemplate/>
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
      {isAuth ?<></> : <FooterPosition> <Footer /></FooterPosition>}
    </div>
  );
}
export default App;
