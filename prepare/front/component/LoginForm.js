import React, { useCallback, useState, useMemo } from 'react'
import { Form, Input, Button } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  // div tag 가 된다.
  margin-top: 10px;
`

const FormWrapper = styled(Form)`
  padding: 10px;
`

// eslint-disable-next-line react/prop-types
const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const onChangeId = useCallback((e) => {
    setId(e.target.value)
  }, [])

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [])

  // const style = useMemo(()=>({ // styled component 를 사용원치 않을때 useMemo 사용
  //   marginTop: 10
  // }), []);

  const onSubmitFrom = useCallback(() => {
    console.log('id : ' + id + 'password : ' + password)
    setIsLoggedIn(true)
  }, [id, password])

  return (
    <FormWrapper onFinish={onSubmitFrom}>
      {' '}
      {/*onFinish 는 이미 e.preventDefault() 가 적용되어있다.*/}
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value="id" onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value="password"
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        {/*style={style}*/}
        <Button type="primary" htmlType="submit" loading={false}>
          로그인 {/*htmlType 을 붙여줘야 submit이된다*/}
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
      <div></div>
      <div></div>
      <div></div>
    </FormWrapper>
  )
}

export default LoginForm
