import produce from 'immer'

export const initialState = {
	loadMyInfoLoading: false, // 유저 정보 보기 시도중일땐 로딩중 띄울거임
	loadMyInfoDone: false, // 유저 정보 보기 됨
	loadMyInfoError: null, // 유저 정보 보기중일때 에러 없앰
	followLoading: false, // 팔로우 시도중일땐 로딩중 띄울거임
	followDone: false, // 팔로우 됨
	followError: null, // 팔로우중일때 에러 없앰
	unfollowLoading: false, // 언팔로우 시도중일땐 로딩중 띄울거임
	unfollowDone: false, // 언팔로우 됨
	unfollowError: null, // 팔로우중일때 에러 없앰
	logInLoading: false, // 로그인 시도중일땐 로딩중 띄울거임
	logInDone: false, // 로그인 됨
	logInError: null, // 로딩중일때 에러 없앰
	logOutLoading: false, // 로그아웃 시도중
	logOutDone: false, // 로그아웃 완료
	logOutError: null,
	signUpLoading: false, // 회원가입 로딩중
	signUpDone: false, // 회원 가입 완료
	signUpError: null,
	changeNicknameLoading: false, // 닉네임 변경 로딩중
	changeNicknameDone: false, // 닉네임 변경 완료
	changeNicknameError: null,
	me: null,
	signUpData: {}, // 회원 가입 데이터
	loginData: {},
}

// 로그인 액션 생성기 thunk
// export const loginAction = (data) => { // 함수를 리턴하는 비동기 액션 크리에이터가 추가
// 	return (dispatch, getState) => {
// 		const state = getState()
// 		dispatch(loginRequestAction())
// 		axios.post('/api/login')
// 				.then((res) => {
// 					dispatch(loginSuccessAction(res.data))
// 				})
// 				.catch((error) => {
// 					dispatch(loginFailureAction(error))
// 				})
// 	}
// }

// actions
export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST'
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS'
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE'

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST'
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS'
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE'

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST'
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS'
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE'

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST'
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS'
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE'

// 유저 리듀서의 상태를 바꿀수있는 액션 생성
export const ADD_POST_TO_ME = 'ADD_POST_TO_ME'
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME'

/* front
const dummyUser = (data) => ({
	...data,
	nickname: '비타민',
	id: 1,
	Posts: [{id: 1}],
	Followings: [{nickname: '외노'}, {nickname: '음메'}, {nickname: '썽'}, {nickname: '오댕'}, {nickname: '만뽀'}],
	Followers: [{nickname: '까매'}, {nickname: '만두'}, {nickname: '보챙'}, {nickname: '뒷가'}, {nickname: '야덩'}],
})*/

export const loginRequestAction = (data) => {
	return {
		type: LOG_IN_REQUEST,
		data,
	}
}
// 로그아웃 액션 생성기 thunk
// export const logoutAction = (data) => {
// 	return (dispatch) => {
// 		axios.post('/api/logout')
// 				.then(() => {
// 					dispatch(logoutSuccessAction())
// 				})
// 				.catch(() => {
// 					dispatch(logoutFailureAction())
// 				})
// 	}
// }
export const logoutRequestAction = () => ({
		type: LOG_OUT_REQUEST,
})

const reducer = (state = initialState, action) => produce(state, (draft) => {
	switch (action.type) {
		case LOAD_MY_INFO_REQUEST:
			console.log('reducer myInfo execute')
			// store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
			draft.loadMyInfoLoading = true
			draft.loadMyInfoError = null // 로딩 중일때는 에러 없앰
			draft.loadMyInfoDone = false
			break;
		case LOAD_MY_INFO_SUCCESS:
			draft.loadMyInfoLoading = false
			draft.me = action.data // back 사용자 정보가 들어있음
			draft.loadMyInfoDone = true
			//draft.me = dummyUser(action.data)
			break;
		case LOAD_MY_INFO_FAILURE:
			console.error('loadMyInfoFail : ' + action.error)
			draft.loadMyInfoLoading = false
			draft.loadMyInfoError = action.error
			break;
		case FOLLOW_REQUEST:
			console.log('reducer follow')
			// store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
			draft.followLoading = true
			draft.followError = null // 로딩 중일때는 에러 없앰
			draft.followDone = false
			break;
		case FOLLOW_SUCCESS:
			draft.followLoading = false
			draft.followDone = true
			//draft.me = dummyUser(action.data)
			draft.me.Followings.push({id: action.data})
			break;
		case FOLLOW_FAILURE:
			console.error('followFail : ' + action.error)
			draft.followLoading = false
			draft.followError = action.error
			break;
		case UNFOLLOW_REQUEST:
			console.log('reducer follow')
			// store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
			draft.unfollowLoading = true
			draft.unfollowError = null // 로딩 중일때는 에러 없앰
			draft.unfollowDone = false
			break;
		case UNFOLLOW_SUCCESS:
			draft.unfollowLoading = false
			draft.unfollowDone = true
			//draft.me = dummyUser(action.data)
			// 언팔로우 한 사람만 빠지게
			draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data)
			break;
		case UNFOLLOW_FAILURE:
			console.error('unfollowFail : ' + action.error)
			draft.unfollowLoading = false
			draft.unfollowError = action.error
			break;
		case LOG_IN_REQUEST:
			console.log('reducer login')
			draft.logInLoading = true
			draft.logInError = null
			draft.logInDone = false
			break;
		case LOG_IN_SUCCESS:
			draft.logInLoading = false
			draft.logInDone = true
			//draft.me = dummyUser(action.data) front
			draft.me = action.data // back
			break;
		case LOG_IN_FAILURE:
			console.error('loginFail : ' + action.error)
			draft.logInLoading = false
			draft.logInError = action.error
			break;
		case LOG_OUT_REQUEST:
			draft.logOutLoading = true
			draft.logOutDone = false
			draft.logOutError = null
			break;
		case LOG_OUT_SUCCESS:
			draft.logOutLoading = false
			draft.logOutDone = true
			draft.me = null
			break;
		case LOG_OUT_FAILURE:
			console.error('logoutFail : ' + action.error)
			draft.logOutLoading = false
			draft.logOutError = action.error
			break
		case SIGN_UP_REQUEST:
			draft.signUpLoading = true
			draft.signUpDone = false
			draft.signUpError = null
			break;
		case SIGN_UP_SUCCESS:
			draft.signUpLoading = false
			draft.signUpDone = true
			break
		case SIGN_UP_FAILURE:
			console.error('signUpFail : ' + action.error)
			draft.signUpLoading = false
			draft.signUpError = action.error
			break
		case CHANGE_NICKNAME_REQUEST:
			draft.changeNicknameLoading = true
			draft.changeNicknameDone = false
			draft.changeNicknameError = null
			break
		case CHANGE_NICKNAME_SUCCESS:
			draft.changeNicknameLoading = false
			draft.changeNicknameDone = true
			break;
		case CHANGE_NICKNAME_FAILURE:
			console.error('changeNickFail : ' + action.error)
			draft.changeNicknameLoading = false
			draft.changeNicknameError = action.error
			break;
		case ADD_POST_TO_ME: // 게시글을 쓰면 게시글 아이디가 여기로 들어와서 하나가 추가된다
			draft.me.Posts.unshift({id: action.data})
			break
			// return {
			// 	...state,
			// 	me: {
			// 		...state.me,
			// 		Posts: [{id: action.data}, ...state.me.Posts],
			// 	}
			// }
		case REMOVE_POST_OF_ME:
			draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data)
			break;
			// return { // 불변성을 지키며 게시글을 지워야한다.
			// 	...state,
			// 	me: {
			// 		...state.me,
			// 		Posts: state.me.Posts.filter((v) => v.id !== action.data)
			// 	}
			// }
		default:
			break;
	}
})

export default reducer;