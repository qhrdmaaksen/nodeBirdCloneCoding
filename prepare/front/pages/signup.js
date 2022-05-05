import React, {useCallback, useEffect, useState} from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'
import {Form, Input, Checkbox, Button} from 'antd'
import useInput from '../hooks/useInput'
import axios from 'axios'
import {END} from 'redux-saga'
import styled from 'styled-components'
import {LOAD_MY_INFO_REQUEST, SIGN_UP_REQUEST} from "../reducers/user";
import {useDispatch, useSelector} from "react-redux";
import Router from "next/router";
import wrapper from "../store/configureStore";

const ErrorMessage = styled.div`
	color: red;
`

const Signup = () => {
	const dispatch = useDispatch()
	const {signUpLoading, signUpDone, signUpError, me} = useSelector((state) => state.user)

	useEffect(() => {
		if (me && me.id) { // 회원가입 페이지에서 로그인했을 경우 main 화면으로
			Router.replace('/')
		}
	}, [me && me.id])

	useEffect(() => {
		if (signUpDone) { // 회원 가입이 완료되면
			Router.replace('/') // 메인 페이지로 이동
		}
	}, [signUpDone])

	useEffect(() => {
		if (signUpError) {
			alert('회원가입 에러 : ' + signUpError)
		}
	}, [signUpError])

	const [email, onChangeEmail] = useInput('')
	const [nickname, onChangeNickname] = useInput('')
	const [password, onChangePassword] = useInput('')

	const [passwordCheck, setPasswordCheck] = useState('')
	const [passwordError, setPasswordError] = useState(false)
	const onChangePasswordCheck = useCallback(
			(e) => {
				setPasswordCheck(e.target.value)
				setPasswordError(e.target.value !== password)
			},
			[password],
	)

	const [term, setTerm] = useState('')
	const [termError, setTermError] = useState(false)
	const onChangeTerm = useCallback((e) => {
		setTerm(e.target.checked)
		setTermError(false)
	}, [])

	const onSubmit = useCallback(() => {
		if (password !== passwordCheck) {
			return setPasswordError(true)
		}
		if (!term) {
			return setTermError(true)
		}
		console.log('front onSubmit : ' + email, nickname, password)
		dispatch({
			type: SIGN_UP_REQUEST,
			data: {email, password, nickname}
		})
	}, [password, passwordCheck, term])

	return (
			<AppLayout>
				<Head>
					<title>회원 가입 | NodeBird</title>
				</Head>
				<Form onFinish={onSubmit}>
					<div>
						<label htmlFor="user-email"> 이메일 </label>
						<br/>
						<Input name="user-email" type="email" value={email} required onChange={onChangeEmail}/>
					</div>
					<div>
						<label htmlFor="user-nick">닉네임</label>
						<br/>
						<Input name="user-nick" value={nickname} required onChange={onChangeNickname}/>
					</div>
					<div>
						<label htmlFor="user-password">비밀번호</label>
						<br/>
						<Input name="user-password" type="password" value={password} required onChange={onChangePassword}/>
					</div>
					<div>
						<label htmlFor="user-password-check">비밀번호 체크</label>
						<br/>
						<Input
								name="user-password-check"
								type="password"
								value={passwordCheck}
								required
								onChange={onChangePasswordCheck}
						/>
						{passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다!</ErrorMessage>}
					</div>
					<div>
						<Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
							열심히공부하시겠습니까?
						</Checkbox>
						{termError && <ErrorMessage>약관에 동의하셔야합니다.</ErrorMessage>}
					</div>
					<div style={{marginTop: 10}}>
						<Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
					</div>
				</Form>
			</AppLayout>
	)
}

// login 여부에 따라 화면이 바뀌기 때문에 SSR 적용
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
	console.log('signup getServerSideProps start ::')
	console.log(context.req.headers)
	const cookie = context.req ? context.req.headers.cookie : '';
	axios.defaults.headers.Cookie = '';
	if (context.req && cookie) {
		axios.defaults.headers.Cookie = cookie;
	}
	context.store.dispatch({
		type: LOAD_MY_INFO_REQUEST,
	})
	context.store.dispatch(END)
	console.log('signup getServerSideProps END::')
	await context.store.sagaTask.toPromise()
})

export default Signup
