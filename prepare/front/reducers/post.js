//import shortId from 'shortid' front
import produce from 'immer'
//import faker from 'faker' front

export const initialState = {
	mainPosts: [],
	imagePaths: [], // 이미지 경로들이 저장됨
	hasMorePosts: true, // 더 많은 게시물 가져오기
	likePostLoading: false, // 라이크 로드중 로딩
	likePostDone: false, // 라이크 완료했을때 true 변환
	likePostError: null,
	unlikePostLoading: false, // 언라이크 로드 중 로딩
	unlikePostDone: false, // 언라이크 완료했을때 true 변환
	unlikePostError: null,
	uploadImagesLoading: false, // 이미지 로드 중 로딩
	uploadImagesDone: false, // 이미지 로드 완료했을때 true 변환
	uploadImagesError: null,
	loadPostsLoading: false, // 화면 로드중 로딩
	loadPostsDone: false, // 화면 로드 완료되었을때 true 변환
	loadPostsError: null,
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
// 이부분을 사용해서 무한 스크롤링을 만들것 front
/*export const generateDummyPost = (number) => Array(number).fill().map(() => ({
	id: shortId.generate(),
	User: {
		id: shortId.generate(),
		nickname: faker.name.findName(),
	},
	content: faker.lorem.paragraph(),
	Images: [{
		src: faker.image.image(),
	}],
	Comments: [{
		User: {
			id: shortId.generate(),
			nickname: faker.name.findName(),
		},
		content: faker.lorem.sentence(),
	}],
}))*/

//게시글 액션
export const LOAD_POSTS_REQUEST = ' LOAD_POSTS_REQUEST'; // 화면을 로딩하면 바로 LOAD_POSTS_REQUEST 를 호출해줄것
export const LOAD_POSTS_SUCCESS = ' LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = ' LOAD_POSTS_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'; // 변수로 따로 만들어줘야 중간에 오타가나는 일을 막을 수 있다
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE'; // 동기 옵션은 하나만 만들어도 된다

export const addPost = (data) => ({
	type: ADD_POST_REQUEST,
	data,
})

// dynamic action create
export const addComment = (data) => ({
	type: ADD_COMMENT_REQUEST,
	data,
})

/* front dummy
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
*/

/* front dummy
const dummyComment = (data) => ({
	id: shortId.generate(),
	content: data,
	User: {
		id: 1,
		nickname: '비타민',
	}
})*/
// 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수
const reducer = (state = initialState, action) => produce(state, (draft) => {
	// immer 사용시 state 를 draft 로 교체해주며, switch 문인걸 인식하고 break 를 까먹지말자
	switch (action.type) {
		case REMOVE_IMAGE:
			draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data)
			console.log('reducer REMOVE_IMAGE 성공')
			break
		case LIKE_POST_REQUEST:
			draft.likePostLoading = true;
			draft.likePostDone = false;
			draft.likePostError = null;
			console.log('reducer LIKE_POST_REQUEST 요청::')
			break;
		case LIKE_POST_SUCCESS: {
			// mainPosts 에서 id 가 액션데이터포스트아이디를 찾아서
			const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
			// 게시글 좋아요 누른 사람들에게 사용자 아이디를 넣어준다
			post.Likers.push({id: action.data.UserId});
			draft.likePostLoading = false;
			draft.likePostDone = true;
			console.log('reducer LIKE_POST_SUCCESS 성공::')
			break;
		}
		case LIKE_POST_FAILURE:
			draft.likePostLoading = false;
			draft.likePostError = action.error;
			console.error('reducer LIKE_POST_FAILURE 실패:::', action.error)
			break;
		case UNLIKE_POST_REQUEST:
			draft.unlikePostLoading = true;
			draft.unlikePostDone = false;
			draft.unlikePostError = null;
			console.log('reducer UNLIKE_POST_REQUEST 요청::')
			break;
		case UNLIKE_POST_SUCCESS: {
			const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
			post.Likers = post.Likers.filter((v) => v.id !== action.data.UserId);
			draft.unlikePostLoading = false;
			draft.unlikePostDone = true;
			console.log('reducer UNLIKE_POST_SUCCESS 성공::')
			break;
		}
		case UNLIKE_POST_FAILURE:
			draft.unlikePostLoading = false;
			draft.unlikePostError = action.error;
			console.error('reducer UNLIKE_POST_FAILURE 실패:::', action.error)
			break;
		case UPLOAD_IMAGES_REQUEST:
			draft.uploadImagesLoading = true
			draft.uploadImagesDone = false
			draft.uploadImagesError = null
			console.log('reducer UPLOAD_IMAGES_REQUEST 요청::')
			break
		case UPLOAD_IMAGES_SUCCESS:
			draft.imagePaths = action.data
			draft.uploadImagesLoading = false
			draft.uploadImagesDone = true
			console.log('reducer UPLOAD_IMAGES_SUCCESS 성공::')
			break
		case UPLOAD_IMAGES_FAILURE:
			draft.uploadImagesLoading = false
			draft.uploadImagesError = action.error
			console.error('reducer UPLOAD_IMAGES_FAILURE 실패:::', action.error)
			break
		case LOAD_POSTS_REQUEST:
			draft.loadPostsLoading = true;
			draft.loadPostsDone = false;
			draft.loadPostsError = null;
			break;
		case LOAD_POSTS_SUCCESS:
			draft.loadPostsLoading = false
			draft.loadPostsDone = true
			// action.data 에 dummy data 가 들어있을것이며, 기존데이터와 합쳐주는것
			// concat 을 할땐 항상 앞에 대입을 해줘야한다 그래야 합쳐짐
			draft.mainPosts = action.data.concat(draft.mainPosts)
			// 게시물을 50 개까지만 가져오겠다
			draft.hasMorePosts = draft.mainPosts.length < 50
			break;
		case LOAD_POSTS_FAILURE:
			draft.loadPostsLoading = false
			draft.loadPostsError = action.error
			break;
		case ADD_POST_REQUEST:
			draft.addPostLoading = true;
			draft.addPostDone = false;
			draft.addPostError = null;
			break;
		case ADD_POST_SUCCESS:
			// draft.mainPosts.unshift(dummyPost(action.data)) // front dummy
			draft.mainPosts.unshift(action.data) // back 실제 데이터
			draft.addPostLoading = false
			draft.addPostDone = true
			draft.imagePaths = [] // add post 성공 시, 사용자 게시글 작성에 이미지 초기화
			break;
		case ADD_POST_FAILURE:
			draft.addPostLoading = false
			draft.addPostError = action.error
			break;
		case REMOVE_POST_REQUEST:
			draft.removePostLoading = true
			draft.removePostDone = false
			draft.removePostError = null
			break;
		case REMOVE_POST_SUCCESS:
			draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data.PostId) // 지울땐 보통 filter 가 편하다
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
			//const post = draft.mainPosts.find((v) => v.id === action.data.postId) // 게시글 리스트중에 post 찾기 front
			const post = draft.mainPosts.find((v) => v.id === action.data.PostId) // 게시글 리스트중에 post 찾기 bak
			//post.Comments.unshift(dummyComment(action.data.content)) // 찾은 post 에 맨 앞에 가짜 댓글 하나 넣어줌 FRONT
			post.Comments.unshift(action.data.content) // 찾은 post 에 실제 데이터 back
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
