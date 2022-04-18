export const initialState = {
	logInLoading: false, // 로그인 시도중일땐 로딩중 띄울거임
	logInDone: false, // 로그인 됨
	logInError: null, // 로딩중일때 에러 없앰
	logOutLoading: false, // 로그아웃 시도중
	logOutDone: false, // 로그아웃 완료
	logOutError: null,
	signUpLoading: false, // 회원가입 로딩중
	signUpDone: false, // 회원 가입 완료
	signUpError: null,
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
// 				.catch((err) => {
// 					dispatch(loginFailureAction(err))
// 				})
// 	}
// }

// actions
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST'
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS'
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE'

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST'
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS'
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE'

const dummyUser = (data) => ({
	...data,
	nickname: '비타민',
	id: 1,
	Posts:[],
	Followings: [],
	Followers: [],
})

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
export const logoutRequestAction = () => {
	return {
		type: LOG_OUT_REQUEST,
	}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN_REQUEST:
			console.log('reducer login')
			return {
				// store 에서 보낸 state 가 만들어짐, state 자체가 uiser.js 의 state 임
				...state,
				logInLoading: true,
				logInError: null, // 로딩 중일때는 에러 없앰
				logInDone: false,
			}
		case LOG_IN_SUCCESS:
			return {
				// store 에서 보낸 state 가 만들어짐, state 자체가 uiser.js 의 state 임
				...state,
				logInLoading: false,
				logInDone: true,
				me: dummyUser(action.data),
			}
		case LOG_IN_FAILURE:
			return {
				// store 에서 보낸 state 가 만들어짐, state 자체가 uiser.js 의 state 임
				...state,
				logInLoading: false,
				logInDone: false,
			}
		case LOG_OUT_REQUEST:
			return {
				// store 에서 보낸 state 가 만들어짐
				...state,
				logOutLoading: true,
				logOutDone: false,
				logOutError: null,
			}
		case LOG_OUT_SUCCESS:
			return {
				// store 에서 보낸 state 가 만들어짐
				...state,
				logOutLoading: false,
				logOutDone: true,
				me: null,
			}
		case LOG_OUT_FAILURE:
			return {
				// store 에서 보낸 state 가 만들어짐
				...state,
				logOutLoading: false,
				logOutError: action.error,
			}
		case SIGN_UP_REQUEST:
			return {
				// store 에서 보낸 state 가 만들어짐
				...state,
				signUpLoading: true,
				signUpDone: false,
				signUpError: null,
			}
		case SIGN_UP_SUCCESS:
			return {
				// store 에서 보낸 state 가 만들어짐
				...state,
				signUpLoading: false,
				signUpDone: true,
				me: null,
			}
		case SIGN_UP_FAILURE:
			return {
				// store 에서 보낸 state 가 만들어짐
				...state,
				signUpLoading: false,
				signUpError: action.error,
			}
		default:
			return state;
	}
}

export default reducer;