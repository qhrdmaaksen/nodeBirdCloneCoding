import React, { useCallback } from 'react'
import { Card, Avatar, Button } from 'antd'
import {useDispatch} from "react-redux";
import { logoutAction } from '../reducers/user'

// eslint-disable-next-line react/prop-types
const UserProfile = () => {
  const dispatch = useDispatch()

  const onLogOut = useCallback(() => {
    //setIsLoggedIn(false)
    dispatch(logoutAction())
  }, [])

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div> /*리액트에서 배열로 jsx 사용할땐 key 붙여줘야함*/,
        <div key="following">
          팔로윙
          <br />0
        </div>,
        <div key="follower">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>mr.min</Avatar>} title="vitamin777" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  )
}

export default UserProfile
