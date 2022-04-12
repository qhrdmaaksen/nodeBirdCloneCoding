import { Form, Input, Button } from 'antd'
import React, { useCallback, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPost } from '../reducers/post'

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post)
  const [text, setText] = useState('')
  const imageInput = useRef()
  const dispatch = useDispatch()

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click()
  }, [imageInput.current])

  const onChangeText = useCallback((e) => {
    setText(e.target.value)
  }, [])

  const onSubmit = useCallback(() => {
    dispatch(addPost)
    setText('')
  }, [])

  return (
    // post Form
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => {
          return (
            // 이미지 등록을 했을 시, 이미지 경로가 저장되며, 반복문으로 표시해줌
            <div key={v} style={{ display: 'inline-block' }}>
              <img src={'http://localhost:3065/' + v} style={{ width: '200px' }} alt={v} />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          )
        })}
      </div>
    </Form>
  )
}

export default PostForm