import shortId from 'shortid'
import produce from 'immer'

export const initialState = {
	mainPosts: [
		{
			id: shortId.generate(),
			User: {
				id: shortId.generate(),
				nickname: '비타민',
			},
			content: '첫 번째 게시글 #해시태그 #익스프레스',
			Images: [{
				id: shortId.generate(),
				src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
			}, {
				id: shortId.generate(),
				src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
			}, {
				id: shortId.generate(),
				src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
			}],
			Comments: [
				{
					id: shortId.generate(),
					User: {
						id: shortId.generate(),
						nickname: 'nero',
					},
					content: '개정판이 나왔네요!?',
				},
				{
					id: shortId.generate(),
					User: {
						id: shortId.generate(),
						nickname: 'hero',
					},
					content: '정말정말 신기하당!',
				},
			],
		},
	],
	imagePaths: [], // 이미지 경로들이 저장됨
	addPostLoading: false, // 게시물 등록중 로딩
	addPostDone: false, // 게시물 추가가 완료되었을때 true 변환
	addPostError: null,
	removePostLoading: false, // 게시물 삭제중 로딩
	removePostDone: false, // 게시물 삭제가 완료되었을때 true 변환
	removePostError: null,
	addCommentLoading: false, // 댓글 등록중 로딩
	addCommentDone: false, // 게시물 추가가 완료되었을때 true 변환
	addCommentError: null,
}

//게시글 작성하는 액션
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'; // 변수로 따로 만들어줘야 중간에 오타가나는 일을 막을 수 있다
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
	type: ADD_POST_REQUEST,
	data,
})

// dynamic action create
export const addComment = (data) => ({
	type: ADD_COMMENT_REQUEST,
	data,
})

const dummyPost = (data) => ({
	id: data.id,
	content: data.content,
	User: {
		id: 1,
		nickname: '비타민',
	},
	Images: [],
	Comments: [],
})

const dummyComment = (data) => ({
	id: shortId.generate(),
	content: data,
	User: {
		id: 1,
		nickname: '비타민',
	}
})
// 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수
const reducer = (state = initialState, action) => 	produce(state, (draft) => {
	// immer 사용시 state 를 draft 로 교체해주며, switch 문인걸 인식하고 break 를 까먹지말자
		switch (action.type) {
			case ADD_POST_REQUEST:
				draft.addPostLoading = true;
				draft.addPostDone = false;
				draft.addPostError = null;
				break;
			case ADD_POST_SUCCESS:
				draft.mainPosts.unshift(dummyPost(action.data))
				draft.addPostLoading = false
				draft.addPostDone = true
				break;
			case ADD_POST_FAILURE:
				draft.addPostLoading = false
				draft.addPostError = action.data
				break;
			case REMOVE_POST_REQUEST:
				draft.removePostLoading = true
				draft.removePostDone = false
				draft.removePostError = null
				break;
			case REMOVE_POST_SUCCESS:
				draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data) // 지울땐 보통 filter 가 편하다
				draft.PostLoading = false
				draft.PostDone = true
				break;
			case REMOVE_POST_FAILURE:
				draft.removePostLoading = false
				draft.removePostError = action.error
				break;
			case ADD_COMMENT_REQUEST:
				draft.addCommentLoading = true
				draft.addCommentDone = false
				draft.addCommentError = null
				break;
			case ADD_COMMENT_SUCCESS: {
				//action.data.content, postId, userId
				const post = draft.mainPosts.find((v) => v.id === action.data.postId) // 게시글 리스트중에 post 찾기
				post.Comments.unshift(dummyComment(action.data.content)) // 찾은 post 에 맨 앞에 가짜 댓글 하나 넣어줌
				draft.addCommentLoading = false
				draft.addCommentDone = true
				break;
			}
			case ADD_COMMENT_FAILURE:
				draft.addCommentLoading = false
				draft.addCommentError = action.error
				break;
			default:
				break;
		}
	})
export default reducer
