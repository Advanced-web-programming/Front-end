import styled, { keyframes } from 'styled-components'
import Modal from 'react-modal'
import { useRef, useEffect, useState } from 'react'

import { registernApi } from '../../api/userApi'
import { useRecoilState } from 'recoil'

import { userInfoAtom } from '../../atoms/userAtom'

const LoginText = styled.h2`
	margin-top: 10px;
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
	margin-bottom: 20px
`

const Form = styled.input`
	border-radius: 10px;
	border: none;
	margin: 5px 0;
	padding: 0 19px;
	width: 100%;
	height: 59px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
	&:focus{
    outline: none;
  }
`
const LoginBtn = styled.button`
	background: #3a3a3a;
	border-radius: 10px;
	border: none;
	margin: auto 0 0 0;
	padding: 0 19px;
	width: 100%;
	height: 59px;
	color: #ffffff;
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

export function RegisterModal(props) {
  const [id, setId] = useState("");
	const [password, setPassword] = useState("");
  const [name, setName] = useState("");

	const [user, setUser] = useRecoilState(userInfoAtom)

  const clickHandler = async() => {
    const response = await registernApi(id, name, password)
		if(response !== "create ok"){
			alert("이미 존재하는 유저입니다.")
			return
		}
		alert("환영합니다.")
		props.setIsOpen(false)
  }

  return(
    <>
					<LoginText>회원가입</LoginText>
					<MessageText>새로 뵙게 되어 반갑습니다!</MessageText>
					<Form type="email" placeholder="이메일 또는 휴대전화" onChange={(e)=>setId(e.currentTarget.value)} value={id}></Form>
					<Form type='password' placeholder="비밀번호" onChange={(e)=>setPassword(e.currentTarget.value)} value={password}></Form>
					<Form type="text" placeholder="닉네임" onChange={(e)=>setName(e.currentTarget.value)} value={name}></Form>
					<LoginBtn onClick={clickHandler}>회원가입 하기</LoginBtn>
					<Register onClick={()=>props.setIsOpen(false)}>로그인 화면으로 - 돌아가기</Register>
				</>
    
  )
}