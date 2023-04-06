<<<<<<< HEAD
import React from 'react'
import styled from 'styled-components'

import { Main } from './pages/main/Main'
import { LoginModal } from './template/loginModal/LoginModal'
import { Nav } from './template/nav/Nav'
import { Footer } from './template/footer/Footer'

const NavPosition = styled.div`
	position: absolute;
	height: 112px;
	width: 80%;
	margin: 23px 10% 0 10%;
	align-items: center;
	justify-content: space-evenly;
	display: flex;
`

const FooterPosition = styled.footer`
	display: flex;
	width: 80%;
	height: 112px;
	margin: 23px 10% 0 10%;
	align-items: center;
	justify-content: space-evenly;
`

function App() {
	return (
		<>
			<NavPosition>
				<Nav />
			</NavPosition>
			{/* <LoginModal /> */}
			<Main />

			<FooterPosition>
				<Footer />
			</FooterPosition>
		</>
	)
=======
import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drone from "./pages/drone/Drone";

import { Main } from "./pages/main/Main";

const NavPosition = styled.div`
  position: absolute;
  height: 112px;
  width: 90%;
  margin: 23px 5%;
`;

const Footer = styled.footer`
  width: 90%;
  height: 112px;
  margin: 23px 5%;
`;

function App() {
  return (
    <>
      <NavPosition></NavPosition>

      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/drone" element={<Drone />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
>>>>>>> b786de3 (한슬 첫번째)
}

export default App

