import React from 'react'
import styled from 'styled-components'

import { Main } from './pages/main/Main'
import { LoginModal } from './template/loginModal/LoginModal'
import { Nav } from './template/nav/Nav'
import { Footer } from './template/footer/Footer'

const NavPosition = styled.div`
	position: absolute;
	height: 112px;
	width: 60%;
	margin: 23px 20% 0 20%;
	align-items: center;
	justify-content: space-between;
	display: flex;
`

const FooterPosition = styled.footer`
	display: flex;
	width: 60%;
	height: 112px;
	margin: 23px 20% 0 20%;
	align-items: center;
	justify-content: space-between;
`

function App() {
	return (
		<>
			<NavPosition>
				<Nav />
			</NavPosition>
			<LoginModal />
			<Main />

			<FooterPosition>
				<Footer />
			</FooterPosition>
		</>
	)
}

export default App
