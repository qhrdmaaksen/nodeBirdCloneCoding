import React from "react";
import PropTypes from "prop-types";
import Link from 'next/link'

const PostCardContent = ({postData}) => { // 첫 번째 게시글 #해시태그 #익스프레스
	return (
			<div>
				{postData.split(/(#[^\s#]+)/g).map((v, i) => {
					if (v.match(/(#[^\s#]+)/)) { // 해시태그와 일치하는지
						return <Link href={`/hashtag/${v.slice(1)}`} key={i}><a>{v}</a></Link>
					}
					return v;
				})}
			</div>
	)
}
PostCardContent.propTypes = {
	postData: PropTypes.string.isRequired,
}
export default PostCardContent