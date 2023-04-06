
import React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import styled from 'styled-components'

import { Main } from './pages/main/Main'
import { Nav } from './template/nav/Nav'
import { Footer } from './template/footer/Footer'
import { DroneTemplate } from './template/drone/DroneTemplate';

const NavPosition = styled.div`
	position: absolute;
	height: 112px;
	width: 100vw;
	Z-index: 1
`

const FooterPosition = styled.footer`
	display: flex;
	width: 100vw;
	height: 112px;
	margin: 23px 0;
	align-items: center;
	justify-content: center;
`

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
					</Routes>
			</BrowserRouter>
			<FooterPosition>
				<Footer />
			</FooterPosition>
		</div>
	)
}
export default App

