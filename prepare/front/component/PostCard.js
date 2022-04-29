import React, {useCallback, useEffect, useState} from 'react'
import {Avatar, Button, Card, Comment, List, Popover} from "antd";
import {EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined, HeartTwoTone} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from 'prop-types'
import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
import {LIKE_POST_REQUEST, REMOVE_POST_REQUEST, UNLIKE_POST_REQUEST, RETWEET_REQUEST} from "../reducers/post";
import FollowButton from "./FollowButton";


const PostCard = ({post}) => {
	const dispatch = useDispatch()
	const {removePostLoading} = useSelector((state) => state.post)
	const [commentFormOpened, setCommentFormOpened] = useState(false)
	const id = useSelector((state) => state.user.me?.id) //state.user.me && state.user.me.id
//	const [liked, setLiked] = useState(false) front


	const onLike = useCallback(() => { // 좋아요 클릭
		if (!id) { // 로그인이 안되어있다면 바로바로 막아주는게 좋다
			return alert('로그인이 필요합니다!')
		}
		return dispatch({
			type: LIKE_POST_REQUEST,
			data: post.id, // 게시글 아이디
		})
	}, [id])
	const onUnLike = useCallback(() => { // 좋아요 해제 클릭
		if (!id) { // 로그인이 안되어있다면 바로바로 막아주는게 좋다
			return alert('로그인이 필요합니다!')
		}
		return dispatch({
			type: UNLIKE_POST_REQUEST,
			data: post.id, // 게시글 아이디
		})
	}, [id])

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


	const onRetweet = useCallback(() => {
				if (!id) { // 로그인이 안되어있다면 바로바로 막아주는게 좋다
					return alert('로그인이 필요합니다!')
				}
				return dispatch({
					type: RETWEET_REQUEST,
					data: post.id,
				})
			},[id]);

	const liked = post.Likers.find((v) => v.id === id) // 게시글 좋아요 누른 사람중에 내가 있는지

	return (
			<div style={{marginBottom: 20}}>
				<Card
						cover={post.Images[0] && <PostImages images={post.Images}/>} // 이미지가 한개 이상있을때 포스트 이미지스
						actions={[
							<RetweetOutlined key="retweet" onClick={onRetweet}/>, // 리트윗 버튼
							liked
									? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnLike}/> // 하트 버튼
									: <HeartOutlined key="heart" onClick={onLike}/>, // 하트 버튼
							<MessageOutlined key="comment" onClick={onToggleComment}/>, // 댓글 버튼
							<Popover key="more" content={( // 더 보기 버튼
									<Button.Group>
										{id && post.User.id === id
												? ( /*내가 쓴 글이면 수정 삭제 가능*/
												<>
													<Button>수정</Button>
													<Button type="danger" loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
												</>
										)
										: <Button>신고</Button>} {/* 남이 쓴 글이면 삭제 가능*/}
									</Button.Group>
							)}
							>
								<EllipsisOutlined/>
							</Popover>,
						]}
						title={post.RetweetId ? `${post.User.nickname}님이 리트윗 하셨습니다.` : null}
						extra={id && <FollowButton post={post}/>} // 우측 추가공간,로그인했을경우만보이게
				>
					{/*retweet 인 경우 카드안에 카드 넣어주기*/}
					{post.RetweetId && post.Retweet
							? (
									<Card
											cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images}/>}
									>
										<Card.Meta
												avatar={<Avatar>{post.Retweet.User.nickname[0]}</Avatar>}
												title={post.Retweet.User.nickname}
												description={<PostCardContent
														postData={post.Retweet.content}/>} // 특수한 기능을 처리하는 것을 만들기 위해선 따로 컴포넌트로 빼주는게 보기 깔끔하다
										/>
									</Card>
							)
							: (
									<Card.Meta
											avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
											title={post.User.nickname}
											description={<PostCardContent
											postData={post.content}/>} // 특수한 기능을 처리하는 것을 만들기 위해선 따로 컴포넌트로 빼주는게 보기 깔끔하다
									/>
							)}
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