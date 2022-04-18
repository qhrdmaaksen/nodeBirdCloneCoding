import React, {useCallback} from 'react'
import {Form, Input, Button} from 'antd'
import Link from 'next/link'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'
import {useDispatch, useSelector} from "react-redux";
import {loginAction, loginRequestAction} from "../reducers/user";

const ButtonWrapper = styled.div`
	margin-top: 10px;
`

const FormWrapper = styled(Form)`
	padding: 10px;
`

const LoginForm = () => {
	const dispatch = useDispatch()
	const {isLoggingIn} = useSelector((state) => state.user)
	const [id, onChangeId] = useInput('')
	const [password, onChangePassword] = useInput('')

	// const style = useMemo(()=>({ // styled component 를 사용원치 않을때 useMemo 사용
	//   marginTop: 10
	// }), []);

	const onSubmitFrom = useCallback(() => {
		console.log('id : ' + id + ',' + ' password : ' + password)
		//setIsLoggedIn(true)
		dispatch(loginRequestAction({id, password}))
	}, [id, password])

	return (
			<FormWrapper onFinish={onSubmitFrom}>
				{/*onFinish 는 이미 e.preventDefault() 가 적용되어있다.*/}
				<div>
					<label htmlFor="user-id">아이디</label>
					<br/>
					<Input name="user-id" value={id} onChange={onChangeId} required/>
				</div>
				<div>
					<label htmlFor="user-password">비밀번호</label>
					<br/>
					<Input name="user-password" type="password" value={password} onChange={onChangePassword} required/>
				</div>
				<ButtonWrapper>
					<Button type="primary" htmlType="submit" loading={isLoggingIn}>
						로그인 {/*htmlType 을 붙여줘야 submit 이 된다*/}
					</Button>
					<Link href="/signup">
						<a>
							<Button>회원가입</Button>
						</a>
					</Link>
				</ButtonWrapper>
			</FormWrapper>
	)
}

/*LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
}*/

export default LoginForm
