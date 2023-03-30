import styled from 'styled-components'
import Modal from 'react-modal'

const LoginPage = styled.div`
	display: flex;
	position: fixed;
	width: 515px;
	height: 733px;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #ffffff;
	border-radius: 30px;
	justify-content: center;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Contents = styled.div`
	display: flex;
	flex-direction: column;
	padding: 64px 48px;
	width: inherit;
`

const LoginText = styled.h2`
	margin-block-start: 0.5em;
	margin-block-end: 0.5em;
	font-weight: 600;
	font-size: 32px;
	line-height: 39px;
`

const MessageText = styled.h5`
	margin-block-start: 0.5em;
	margin-block-end: 0.5em;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
`

const Form = styled.input`
	border-radius: 10px;
	border: none;
	margin: 10px 0;
	padding: 0 19px;
	width: auto;
	height: 59px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
`

const Forget = styled.span`
	margin-top: 10px;
	font-size: 11px;
	line-height: 13px;
	color: #b6b6b6;
	text-align: end;
`

const LoginBtn = styled.button`
	background: #3a3a3a;
	border-radius: 10px;
	border: none;
	margin: 10px 0;
	padding: 0 19px;
	width: auto;
	height: 59px;
	color: #ffffff;
	font-size: 16px;
	line-height: 19px;
	font-weight: 600;
`

const LoginGoogle = styled.button`
	background: #ffffff;
	border-radius: 10px;
	border: 3px solid black;
	margin: 10px 0;
	padding: 0 19px;
	width: auto;
	height: 59px;
	color: #000000;
	font-size: 16px;
	line-height: 19px;
	font-weight: 600;
`

const Register = styled.button`
	border: none;
	background: none;
	font-size: 16px;
	font-weight: 400;
	margin: 40px 0;
`

export function LoginModal(props) {
	return (
		<>
			<LoginPage>
				<Contents>
					<LoginText>로그인</LoginText>
					<MessageText>다시 뵙게 되어 반갑습니다!</MessageText>
					<br />
					<br />
					<Form placeholder="이메일 또는 휴대전화"></Form>
					<Form placeholder="비밀번호"></Form>
					<Forget>비밀번호를 잊으셨나요?</Forget>
					<br />
					<br />
					<br />
					<br />
					<LoginBtn>로그인 하기</LoginBtn>
					<LoginGoogle>로그인 2</LoginGoogle>
					<Register>계정이 없으신가요? 회원 가입하기</Register>
				</Contents>
			</LoginPage>
		</>
	)
}
