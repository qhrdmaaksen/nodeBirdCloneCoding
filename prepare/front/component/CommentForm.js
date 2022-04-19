import React, {useCallback, useEffect} from 'react'
import {Button, Form, Input} from "antd";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {ADD_COMMENT_REQUEST} from "../reducers/post";

const CommentForm = ({post}) => {
	const dispatch = useDispatch()
	const id = useSelector((state) => state.user.me?.id)
	const {addCommentDone, addCommentLoading} = useSelector((state) => state.post)
	const [commentText, onChangeCommentText, setCommentText] = useInput('')

	useEffect(() => {
		if (addCommentDone) {
			setCommentText('')
		}
	}, [addCommentDone])

	const onSubmitComment = useCallback(() => {
		console.log('post.id : ' + post.id + ', commentText : ' + commentText + ', userId : ' + id)
		dispatch({ // 변수를 사용해서 create, 재사용 될거라면 나중에 함수로 빼는게 좋으며, 컴포넌트에서만 쓰일거면 액션 객체하나로 넣는다
			type: ADD_COMMENT_REQUEST,
			data: {content: commentText, userId: id, postId: post.id},
		})
	}, [commentText, id])

	return (
			<Form onFinish={onSubmitComment}>
				<Form.Item style={{position: "relative", margin: 0}}>
					<Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4}/>
					<Button style={{position: 'absolute', right: 0, bottom: -40, zIndex: 1}}
									type="primary" htmlType="submit" loading={addCommentLoading}
					>삐약
					</Button>
				</Form.Item>
			</Form>
	)
}
CommentForm.prototype = {
	post: PropTypes.object.isRequired,
}
export default CommentForm;
