import React, { useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Menu, Input, Row, Col } from 'antd' // antd 에 Menu 사용
import styled from 'styled-components'
import UserProfile from '../component/UserProfile'
import LoginForm from '../component/LoginForm'

const SearchInput = styled(Input.Search)`
  // antd 에서 사용한 Input.Search 를 styled component 로 바꿔 넣어줌
  verticalalign: middle;
`

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState()
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      {/*컬럼 사이의 간격 gutter*/}
      <Row gutter={8}>
        {/*antd design 은 세로줄을 24 픽셀로 나눔*/}
        <Col xs={24} md={6}>
          {/*dummy data*/}
          {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
        </Col>
        <Col xs={24} md={12}>
          {children} {/*여기는 AppLayout 의 children*/}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://qhrdmaaksen.github.io/" target={'_blank'} rel="noreferrer noopener">
            Made in Vitamin
          </a>
        </Col>
      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
