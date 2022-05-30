import React, {useCallback, useEffect, useState} from "react";
import Link from 'next/link'
import {Input} from 'antd'
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {Button} from 'antd'


const {TextArea} = Input;
const PostCardContent = ({postData, editMode, onCancelUpdate, onChangePost}) => {
	const {updatePostLoading, updatePostDone} = useSelector((state) => state.post)
	const [editText, setEditText] = useState(postData)

	/*게시글 다 쓰고나면 textArea 없애고, 다시 원래의 postData 로 돌아가도록*/
	useEffect(()=> {
		if (updatePostDone){
			onCancelUpdate();
		}
	}, [updatePostDone])

	const onChangeText = useCallback( // 게시글 수정을 위해 만듬
			(e) => {
				setEditText(e.target.value);
			},
			[],
	);

	return (// 첫 번째 게시글 #해시태그 #익스프레스
			<div>
				{editMode
						? (
								<>
									<TextArea value={editText} onChange={onChangeText}/>
									<Button.Group>
										<Button loading={updatePostLoading} onClick={onChangePost(editMode)}>수정</Button>
										<Button type="danger" onClick={onCancelUpdate}>취소</Button>
									</Button.Group>
								</>
						)
						: postData.toString().split(/(#[^\s#]+)/g).map((v, i) => {
							if (v.match(/(#[^\s#]+)/)) { // 해시태그와 일치하는지
								return <Link href={`/hashtag/${v.slice(1)}`} prefetch={false} key={i}><a>{v}</a></Link>
							}
							return v;
						})}
			</div>
	)
}
PostCardContent.propTypes = {
	postData: PropTypes.string.isRequired,
	editMode: PropTypes.bool,
	onCancelUpdate: PropTypes.func.isRequired,
	onChangePost: PropTypes.func.isRequired,
}

PostCardContent.defaultProps = {
	editMode: false,
}

export default PostCardContent