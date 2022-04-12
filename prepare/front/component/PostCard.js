import React, {useCallback, useState} from 'react'
import {Avatar, Button, Card, Popover} from "antd";
import {EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined, HeartTwoTone} from "@ant-design/icons";
import {useSelector} from "react-redux";
import PropTypes from 'prop-types'
import PostImages from "./PostImages";

const PostCard = ({post}) => {
	const id = useSelector((state) => state.user.me?.id) //state.user.me && state.user.me.id
	const [liked, setLiked] = useState(false)
	const [commentFormOpened, setCommentFormOpened] = useState(false)

	const onToggleLike = useCallback(() => {
		setLiked((prev) => !prev)
	}, [])

	const onToggleComment = useCallback(() => {
		setCommentFormOpened((prev) => !prev)
	}, [])


	return (
			<div style={{marginBottom: 20}}>
				<Card
						cover={post.Images[0] && <PostImages images={post.Images}/>}
						actions={[
							<RetweetOutlined key="retweet"/>, // 리트윗 버튼
							liked
									? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike}/> // 하트 버튼
									: <HeartOutlined key="heart" onClick={onToggleLike}/>, // 하트 버튼
							<MessageOutlined key="comment" onClick={onToggleComment}/>, // 댓글 버튼
							<Popover key="more" content={( // 더 보기 버튼
									<Button.Group>
										{id && post.User.id === id ? ( /*내가 쓴 글이면 수정 삭제 가능*/
												<>
													<Button>수정</Button>
													<Button type="danger">삭제</Button>
												</>
										) : <Button>신고</Button>} {/* 남이 쓴 글이면 삭제 가능*/}
									</Button.Group>
							)}>
								<EllipsisOutlined/>
							</Popover>,
						]}
				>
					<Card.Meta
							avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
							title={post.User.nickname}
							description={post.content}
					/>
				</Card>
				{commentFormOpened && (
						<div>
							댓글 부분
						</div>)}
				{/*<CommentForm />
				<Comments />*/}
			</div>
	)
}
PostCard.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number,
		User: PropTypes.object,
		content: PropTypes.string,
		createdAt: PropTypes.object, // 날짜 객체
		Comments: PropTypes.arrayOf(PropTypes.object),
		Images: PropTypes.arrayOf(PropTypes.object),
	}).isRequired,
}

export default PostCard