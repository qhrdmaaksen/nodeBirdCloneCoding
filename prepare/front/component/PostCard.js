import React, {useCallback, useState} from 'react'
import {Avatar, Button, Card, Comment, List, Popover} from "antd";
import {EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined, HeartTwoTone} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from 'prop-types'
import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
import {LIKE_POST_REQUEST, REMOVE_POST_REQUEST, UNLIKE_POST_REQUEST} from "../reducers/post";
import FollowButton from "./FollowButton";

const PostCard = ({post}) => {
	const dispatch = useDispatch()
	const {removePostLoading} = useSelector((state) => state.post)
	const [commentFormOpened, setCommentFormOpened] = useState(false)
//	const [liked, setLiked] = useState(false) front


	const onLike = useCallback(() => { // 좋아요 클릭
		dispatch({
			type: LIKE_POST_REQUEST,
			data: post.id, // 게시글 아이디
		})
	}, [])
	const onUnLike = useCallback(() => { // 좋아요 해제 클릭
		dispatch({
			type: UNLIKE_POST_REQUEST,
			data: post.id, // 게시글 아이디
		})
	}, [])

	/* front
	const onToggleLike = useCallback(() => {
		setLiked((prev) => !prev)
	}, [])*/

	const onToggleComment = useCallback(() => {
		setCommentFormOpened((prev) => !prev)
	}, [])

	const onRemovePost = useCallback(() => {
		if (!id) {
			return alert('로그인이 필요합니다.')
		}
		return dispatch({
			type: REMOVE_POST_REQUEST,
			data: post.id,
		})
	}, [id])

	const id = useSelector((state) => state.user.me?.id) //state.user.me && state.user.me.id
	const liked = post.Likers.find((v)=> v.id === id) // 게시글 좋아요 누른 사람중에 내가 있는지

	return (
			<div style={{marginBottom: 20}}>
				<Card
						cover={post.Images[0] && <PostImages images={post.Images}/>} // 이미지가 한개 이상있을때 포스트 이미지스
						actions={[
							<RetweetOutlined key="retweet"/>, // 리트윗 버튼
							liked
									? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnLike}/> // 하트 버튼
									: <HeartOutlined key="heart" onClick={onLike}/>, // 하트 버튼
							<MessageOutlined key="comment" onClick={onToggleComment}/>, // 댓글 버튼
							<Popover key="more" content={( // 더 보기 버튼
									<Button.Group>
										{id && post.User.id === id ? ( /*내가 쓴 글이면 수정 삭제 가능*/
												<>
													<Button>수정</Button>
													<Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
												</>
										) : <Button>신고</Button>} {/* 남이 쓴 글이면 삭제 가능*/}
									</Button.Group>
							)}>
								<EllipsisOutlined/>
							</Popover>,
						]}
						extra={id && <FollowButton post={post}/>} // 우측 추가공간,로그인했을경우만보이게
				>
					<Card.Meta
							avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
							title={post.User.nickname}
							description={<PostCardContent
									postData={post.content}/>} // 특수한 기능을 처리하는 것을 만들기 위해선 따로 컴포넌트로 빼주는게 보기 깔끔하다
					/>
				</Card>
				{commentFormOpened && (
						<div>
							<CommentForm post={post}/>
							<List
									header={`${post.Comments.length}개의 댓글`}
									itemLayout="horizontal"
									dataSource={post.Comments}
									renderItem={(item) => (
											<li>
												<Comment
														author={item.User.nickname}
														avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
														content={item.content}
												/>
											</li>
									)}
							/>
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
		createdAt: PropTypes.string,
		Comments: PropTypes.arrayOf(PropTypes.object),
		Images: PropTypes.arrayOf(PropTypes.object),
		Likers: PropTypes.arrayOf(PropTypes.object),
		RetweetId: PropTypes.number,
		Retweet: PropTypes.objectOf(PropTypes.any),
	}).isRequired,
};

export default PostCard