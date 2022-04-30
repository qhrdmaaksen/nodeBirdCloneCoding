import produce from 'immer'

export const initialState = {
	loadUserLoading: false, // 상대 정보 보기 시도중일땐 로딩중 띄울거임
	loadUserDone: false, // 상대 정보 보기 됨
	loadUserError: null, // 상대 정보 보기중일때 에러 없앰
	loadMyInfoLoading: false, // 유저 정보 보기 시도중일땐 로딩중 띄울거임
	loadMyInfoDone: false, // 유저 정보 보기 됨
	loadMyInfoError: null, // 유저 정보 보기중일때 에러 없앰
	removeFollowerLoading: false, // 팔로워 유저 삭제 시도중일땐 로딩중 띄울거임
	removeFollowerDone: false, // 팔로워 유저 삭제 됨
	removeFollowerError: null, // 팔로워 유저 삭제 중일때 에러 없앰
	followLoading: false, // 팔로우 시도중일땐 로딩중 띄울거임
	followDone: false, // 팔로우 됨
	followError: null, // 팔로우중일때 에러 없앰
	unfollowLoading: false, // 언팔로우 시도중일땐 로딩중 띄울거임
	unfollowDone: false, // 언팔로우 됨
	unfollowError: null, // 언팔로우중일때 에러 없앰
	loadFollowersLoading: false, // 팔로워 시도중일땐 로딩중 띄울거임
	loadFollowersDone: false, // 팔로워 됨
	loadFollowersError: null, // 팔로워일때 에러 없앰
	loadFollowingsLoading: false, // 팔로윙 시도중일땐 로딩중 띄울거임
	loadFollowingsDone: false, // 팔로윙 됨
	loadFollowingsError: null, // 팔로윙 중일때 에러 없앰
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
	userInfo: null,
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
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE'

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST'
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS'
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE'

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST'
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS'
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE'

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

export const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST'
export const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS'
export const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE'

export const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST'
export const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS'
export const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE'

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

export const loginRequestAction = (data) => ({
	type: LOG_IN_REQUEST,
	data,
});
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
		case LOAD_USER_REQUEST:
			// store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
			draft.loadUserLoading = true
			draft.loadUserDone = false
			draft.loadUserError = null // 로딩 중일때는 에러 없앰
			console.log('reducer myInfo 요청')
			break;
		case LOAD_USER_SUCCESS:
			draft.userInfo = action.data // back 상대 정보가 들어있음
			draft.loadUserLoading = false
			draft.loadUserDone = true
			//draft.me = dummyUser(action.data)
			console.log('reducer myInfo 성공')
			break;
		case LOAD_USER_FAILURE:
			console.error('loadUserFail 실패:: ' + action.error)
			draft.loadUserLoading = false
			draft.loadUserError = action.error
			break;
		case LOAD_MY_INFO_REQUEST:
			// store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
			draft.loadMyInfoLoading = true
			draft.loadMyInfoDone = false
			draft.loadMyInfoError = null // 로딩 중일때는 에러 없앰
			console.log('reducer myInfo 요청')
			break;
		case LOAD_MY_INFO_SUCCESS:
			draft.me = action.data // back 내 정보가 들어있음
			draft.loadMyInfoLoading = false
			draft.loadMyInfoDone = true
			//draft.me = dummyUser(action.data)
			console.log('reducer myInfo 성공')
			break;
		case LOAD_MY_INFO_FAILURE:
			console.error('loadMyInfoFail 실패:: ' + action.error)
			draft.loadMyInfoLoading = false
			draft.loadMyInfoError = action.error
			break;
		case REMOVE_FOLLOWER_REQUEST:
			draft.removeFollowerLoading = true
			draft.removeFollowerDone = false
			draft.removeFollowerError = null
			console.log('reducer removeFollower 요청')
			break;
		case REMOVE_FOLLOWER_SUCCESS:
			// 나의 팔로워 제거
			draft.me.Followers = draft.me.Followers.filter((v) => v.id !== action.data.UserId)
			draft.removeFollowerLoading = false
			draft.removeFollowerDone = true
			console.log('reducer removeFollower 성공')
			break
		case REMOVE_FOLLOWER_FAILURE:
			console.error('removeFollowerFail 실패:: ' + action.error)
			draft.removeFollowerLoading = false
			draft.removeFollowerError = action.error
		case FOLLOW_REQUEST:
			// store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
			draft.followLoading = true
			draft.followError = null // 로딩 중일때는 에러 없앰
			draft.followDone = false
			console.log('reducer FOLLOW_REQUEST 요청')
			break;
		case FOLLOW_SUCCESS:
			draft.followLoading = false
			draft.followDone = true
			//draft.me = dummyUser(action.data)
			draft.me.Followings.push({id: action.data.UserId})
			console.log('reducer FOLLOW_SUCCESS 성공')
			break;
		case FOLLOW_FAILURE:
			draft.followLoading = false
			draft.followError = action.error
			console.error('reducer FOLLOW_FAILURE 실패::', action.error)
			break;
		case UNFOLLOW_REQUEST:
			// store 에서 보낸 state 가 만들어짐, state 자체가 user.js 의 state 임
			draft.unfollowLoading = true
			draft.unfollowError = null // 로딩 중일때는 에러 없앰
			draft.unfollowDone = false
			console.log('reducer unfollow 요청')
			break;
		case UNFOLLOW_SUCCESS:
			draft.unfollowLoading = false
			draft.unfollowDone = true
			//draft.me = dummyUser(action.data)
			// 언팔로우 한 사람만 빠지게
			draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data.UserId)
			console.log('reducer unfollow 성공')
			break;
		case UNFOLLOW_FAILURE:
			draft.unfollowLoading = false
			draft.unfollowError = action.error
			console.error('reducer unfollow 실패::', action.error)
			break;
		case LOG_IN_REQUEST:
			draft.logInLoading = true
			draft.logInError = null
			draft.logInDone = false
			console.log('reducer login 요청')
			break;
		case LOG_IN_SUCCESS:
			draft.logInLoading = false
			draft.logInDone = true
			//draft.me = dummyUser(action.data) front
			draft.me = action.data // back
			console.log('reducer login 성공')
			break;
		case LOG_IN_FAILURE:
			draft.logInLoading = false
			draft.logInError = action.error
			console.error('reducer login 실패:: ', action.error)
			break;
		case LOG_OUT_REQUEST:
			draft.logOutLoading = true
			draft.logOutDone = false
			draft.logOutError = null
			console.log('reducer logout 요청')
			break;
		case LOG_OUT_SUCCESS:
			draft.logOutLoading = false
			draft.logOutDone = true
			draft.me = null
			console.log('reducer logout 성공')
			break;
		case LOG_OUT_FAILURE:
			draft.logOutLoading = false
			draft.logOutError = action.error
			console.error('reducer logout 실패', action.error)
			break
		case SIGN_UP_REQUEST:
			draft.signUpLoading = true
			draft.signUpDone = false
			draft.signUpError = null
			console.log('reducer signup 요청')
			break;
		case SIGN_UP_SUCCESS:
			draft.signUpLoading = false
			draft.signUpDone = true
			console.log('reducer signUp 성공')
			break
		case SIGN_UP_FAILURE:
			draft.signUpLoading = false
			draft.signUpError = action.error
			console.error('reducer signUp 실패', action.error)
			break
		case CHANGE_NICKNAME_REQUEST:
			draft.changeNicknameLoading = true
			draft.changeNicknameDone = false
			draft.changeNicknameError = null
			console.log('reducer CHANGE_NICKNAME_REQUEST 요청')
			break
		case CHANGE_NICKNAME_SUCCESS:
			draft.changeNicknameLoading = false
			draft.changeNicknameDone = true
			console.log('reducer CHANGE_NICKNAME_SUCCESS 성공')
			break;
		case CHANGE_NICKNAME_FAILURE:
			draft.changeNicknameLoading = false
			draft.changeNicknameError = action.error
			console.error('reducer CHANGE_NICKNAME 실패', action.error)
			break;
		case LOAD_FOLLOWERS_REQUEST:
			draft.loadFollowersLoading = true
			draft.loadFollowersDone = false
			draft.loadFollowersError = null
			console.log('reducer LOAD_FOLLOWERS_REQUEST 요청')
			break
		case LOAD_FOLLOWERS_SUCCESS:
			draft.loadFollowersLoading = false
			draft.loadFollowersDone = true
			draft.me.Followers = action.data
			console.log('reducer LOAD_FOLLOWERS_SUCCESS 성공')
			break;
		case LOAD_FOLLOWERS_FAILURE:
			draft.loadFollowersLoading = false
			draft.loadFollowersError = action.error
			console.error('reducer LOAD_FOLLOWERS 실패', action.error)
			break;
		case LOAD_FOLLOWINGS_REQUEST:
			draft.loadFollowingsLoading = true
			draft.loadFollowingsDone = false
			draft.loadFollowingsError = null
			console.log('reducer LOAD_FOLLOWINGS_REQUEST 요청')
			break
		case LOAD_FOLLOWINGS_SUCCESS:
			draft.loadFollowingsLoading = false
			draft.loadFollowingsDone = true
			draft.me.Followings = action.data
			console.log('reducer LOAD_FOLLOWINGS_SUCCESS 성공')
			break;
		case LOAD_FOLLOWINGS_FAILURE:
			draft.loadFollowingsLoading = false
			draft.loadFollowingsError = action.error
			console.error('reducer LOAD_FOLLOWINGS 실패', action.error)
			break;
		case ADD_POST_TO_ME: // 게시글을 쓰면 게시글 아이디가 여기로 들어와서 하나가 추가된다
			draft.me.Posts.unshift({id: action.data})
			console.log('ADD_POST_TO_ME 성공')
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
			console.log('REMOVE_POST_OF_ME')
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