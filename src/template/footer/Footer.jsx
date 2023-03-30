import styled from 'styled-components'
import Logo from '../../assets/Logo.png'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { LoginModal } from '../loginModal/LoginModal'

const LogoPosition = styled.img`
	width: 154px;
	height: 73px;
`

const NavMenuPosition = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px;
	gap: 16px;
	width: max-content;
`

const NavItemLink = styled(Link)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	color: #ffffff;
	text-decoration: none;
	padding: 8px 16px;
	gap: 8px;
	width: 4rem;
	height: 1rem;
`

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
`

export function Footer() {
	useEffect(() => {
		console.log(window.location.href)
	})
	return (
		<>
			<NavMenuPosition>
				<LogoPosition src={Logo} />
				<BrowserRouter>
					<NavItemLink to="/docs">Docs</NavItemLink>
					<NavItemLink to="/privacy">Privacy</NavItemLink>
					<NavItemLink to="/cookies">Cookies</NavItemLink>
					<NavItemLink to="/blog">Blog</NavItemLink>
					<NavItemLink to="/helpcenter">HelpCenter</NavItemLink>
					<NavItemLink to="/managers">Managers</NavItemLink>

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
	)
}
