import React, {useCallback} from 'react';
import PropTypes from "prop-types";
import {Button} from 'antd'
import {useDispatch, useSelector} from "react-redux";
import {FOLLOW_REQUEST, UNFOLLOW_REQUEST} from "../reducers/user";

const FollowButton = ({post}) => {
	const dispatch = useDispatch()
	const {me, followLoading, unfollowLoading} = useSelector((state) => state.user)
	// v.id 가 포스트 작성자의 id 라면
	const isFollowing = me?.Followings.find((v) => v.id === post.User.id)

	const onClickButton = useCallback(() => {
		if (isFollowing) {
			dispatch({
				type: UNFOLLOW_REQUEST,
				data: post.User.id, /*팔로우할때 사용자의 정보를 보내주는곳*/
			})
		} else {
			dispatch({
				type: FOLLOW_REQUEST,
				data: post.User.id,
			})
		}
	}, [isFollowing])
	return (
			<Button loading={followLoading || unfollowLoading} onClick={onClickButton}>
				{isFollowing ? '언팔로우' : '팔로우'} {/*팔로우상태라면 true 상태면 언팔로우, false 라면 팔로우*/}
			</Button>
	)
}
FollowButton.propTypes = {
	post: PropTypes.object.isRequired,
}
export default FollowButton