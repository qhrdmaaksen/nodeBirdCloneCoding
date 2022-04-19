import shortId from 'shortid'


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
	addPostLoading: false,
	addPostDone: false, // 게시물 추가가 완료되었을때 true 변환
	addPostError: null,
	addCommentLoading: false,
	addCommentDone: false, // 게시물 추가가 완료되었을때 true 변환
	addCommentError: null,
}

//게시글 작성하는 액션
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'; // 변수로 따로 만들어줘야 중간에 오타가나는 일을 막을 수 있다
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST'; // 변수로 따로 만들어줘야 중간에 오타가나는 일을 막을 수 있다
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

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST_REQUEST:
			return {
				...state,
				addPostLoading: true,
				addPostDone: false,
				addPostError: null,
			}
		case ADD_POST_SUCCESS:
			return {
				...state,
				mainPosts: [dummyPost(action.data), ...state.mainPosts], // 불변성 지켜주며 앞에다가 추가해야 게시글 위에올라감
				addPostLoading: false,
				addPostDone: true,
			}
		case ADD_POST_FAILURE:
			return {
				...state,
				addPostLoading: false,
				addPostError: action.error,
			}
		case ADD_COMMENT_REQUEST:
			return {
				...state,
				addCommentLoading: true,
				addCommentDone: false,
				addCommentError: null,
			}
		case ADD_COMMENT_SUCCESS:{
			//action.data.content, postId, userId
			const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId)
			const post = {...state.mainPosts[postIndex]}
			post.Comments = [dummyComment(action.data.content), ...post.Comments]
			const mainPosts = [...state.mainPosts]
			mainPosts[postIndex] = post
			return {
				...state,
				mainPosts,
				//mainPosts: [dummyPost, ...state.mainPosts], // 불변성 지켜주며 앞에다가 추가해야 게시글 위에올라감
				addCommentLoading: false,
				addCommentDone: true,
			}
		}
		case ADD_COMMENT_FAILURE:
			return {
				...state,
				addCommentLoading: false,
				addCommentError: action.error,
			}
		default:
			return {
				...state,
			}
	}
}
export default reducer
