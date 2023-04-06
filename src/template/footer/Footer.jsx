import styled from 'styled-components'
import Logo from '../../assets/Logo.png'
import Discord from '../../assets/footer/Discord.png'
import Facebook from '../../assets/footer/Facebook.png'
import Twitter from '../../assets/footer/Twitter.png'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { LoginModal } from '../loginModal/LoginModal'

const FooterPostion = styled.div`
	display: flex;
	flex-direction: column;
`

const LogoPosition = styled.img`
	width: 154px;
	height: 73px;
`

const FooterMenuPosition = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	padding: 0px;
	gap: 16px;
	width: 100%;
`

const FooterItemLink = styled(Link)`
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

const ImgDiv = styled.div`
	display: flex;
	align-items: end;
`

const ImgLink = styled.img`
	color: #ffffff;
	width: 24px;
	height: 24px;
	padding: 16px;
`

const CopyRight = styled.span`
	color: #ffffff;
	text-align: center;
`

export function Footer() {
	useEffect(() => {
		console.log(window.location.href)
	})
	return (
		<>
			<FooterPostion>
				<FooterMenuPosition>
					<LogoPosition src={Logo} />
					<BrowserRouter>
						<FooterItemLink to="/privacy">Privacy</FooterItemLink>
						<FooterItemLink to="/docs">Docs</FooterItemLink>
						<FooterItemLink to="/cookies">Cookies</FooterItemLink>
						<FooterItemLink to="/blog">Blog</FooterItemLink>
						<FooterItemLink to="/helpcenter">HelpCenter</FooterItemLink>
						<FooterItemLink to="/managers">Managers</FooterItemLink>
					</BrowserRouter>
					<ImgDiv>
						<ImgLink src={Discord} />
						<ImgLink src={Facebook} />
						<ImgLink src={Twitter} />
					</ImgDiv>
				</FooterMenuPosition>
				<CopyRight>© 2023 Broken Web, Inc.</CopyRight>
			</FooterPostion>
		</>
	)
}

