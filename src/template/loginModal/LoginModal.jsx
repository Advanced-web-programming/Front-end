import styled, { keyframes } from 'styled-components'
import Modal from 'react-modal'
import { useRef, useEffect } from 'react'

const rotate_image = keyframes`
  0% {
    transform: translateY(40px); 
    opacity: 0; 
  }
  100% {
    transform: translateY(0px);   
    opacity: 1; 
  }
`

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center; // 주축 row 
	flex-wrap: nowrap;
	width: 100vw;
	height: 100vh;
	position: fixed;
	background-color: rgba(0, 0, 0, 0.449);
	top: 0;
`

const LoginPage = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 64px 55px;
	width: 470px;
	height: 670px;
	background: #ffffff;
	border-radius: 30px;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	gap: 10px;

	animation: ${rotate_image} 0.5s ease-in-out;
`


const LoginText = styled.h2`
	margin-right: auto;
	font-weight: 600;
	font-size: 32px;
	line-height: 39px;
`

const MessageText = styled.h5`
	margin-right: auto;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	margin-bottom: 10px
`

const Form = styled.input`
	border-radius: 10px;
	border: none;
	margin: 10px 0;
	padding: 0 19px;
	width: 100%;
	height: 59px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
`

const Forget = styled.span`
	margin: 10px 0 60px;
	font-size: 11px;
	line-height: 13px;
	color: #b6b6b6;
	margin-left: auto;
`

const LoginBtn = styled.button`
	background: #3a3a3a;
	border-radius: 10px;
	border: none;
	margin: 10px 0 0 0;
	padding: 0 19px;
	width: 100%;
	height: 59px;
	color: #ffffff;
	font-size: 14px;
	line-height: 19px;
	font-weight: 600;
`

const LoginGoogle = styled.button`
	background: #ffffff;
	border-radius: 10px;
	border: 3px solid black;
	margin: 10px 0 0 0;
	padding: 0 19px;
	width: 100%;
	height: 59px;
	color: #000000;
	font-size: 14px;
	line-height: 19px;
	font-weight: 600;
`

const Register = styled.button`
	border: none;
	background: none;
	font-size: 14px;
	font-weight: 400;
	margin: 10px 0;
`

export function LoginModal(props) {
	const { onClose } = props
	let searchRef = useRef(null)

	useEffect(() => {
		function handleOutside(e) {
			if (searchRef.current && !searchRef.current.contains(e.target)) {
				onClose(false)
			}
		}
		document.body.style = `overflow: hidden`
		document.addEventListener('mousedown', handleOutside)
		return () => {
			document.body.style = `overflow-x: hidden`
			document.removeEventListener('mousedown', handleOutside)
		}
	}, [searchRef])
	return (
		<Container>
			<LoginPage ref={searchRef}>
					<LoginText>로그인</LoginText>
					<MessageText>다시 뵙게 되어 반갑습니다!</MessageText>
					<Form placeholder="이메일 또는 휴대전화"></Form>
					<Form placeholder="비밀번호"></Form>
					<Forget>비밀번호를 잊으셨나요?</Forget>
					<LoginBtn>로그인 하기</LoginBtn>
					<LoginGoogle>다른 방식으로 로그인</LoginGoogle>
					<Register>계정이 없으신가요? 회원 가입하기</Register>
				
			</LoginPage>
		</Container>
	)
}

