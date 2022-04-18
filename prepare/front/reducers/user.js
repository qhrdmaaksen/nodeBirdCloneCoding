export const initialState = {
	isLoggingIn: false, // 로그인 시도중일땐 로딩중 띄울거임
	isLoggedIn: false, // 로그인 됨
	isLoggedOut: false, // 로그아웃 시도중
	me: null,
	signUpData: {}, // 회원 가입
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
export const loginRequestAction = (data) => {
	return {
		type: 'LOG_IN_REQUEST',
		data,
	}
}
// saga 가 알아서 생성해주기때문에 필요없다
// export const loginSuccessAction = (data) => {
// 	return {
// 		type: 'LOG_IN_SUCCESS',
// 		data,
// 	}
// }
// export const loginFailureAction = (data) => {
// 	return {
// 		type: 'LOG_IN_FAILURE',
// 		data,
// 	}
// }
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
		type: 'LOG_OUT_REQUEST',
	}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOG_IN_REQUEST':
			console.log('reducer login')
			return {
				// store 에서 보낸 state 가 만들어짐, state 자체가 uiser.js 의 state 임
				...state,
				isLoggingIn: true,
				me: action.data,
			}
		case 'LOG_IN_SUCCESS':
			return {
				// store 에서 보낸 state 가 만들어짐, state 자체가 uiser.js 의 state 임
				...state,
				isLoggingIn: false,
				isLoggedIn: true,
				me: {...action.data, nickname: 'vitamin'},
			}
		case 'LOG_IN_FAILURE':
			return {
				// store 에서 보낸 state 가 만들어짐, state 자체가 uiser.js 의 state 임
				...state,
				isLoggingIn: false,
				isLoggedIn: false,
			}
		case 'LOG_OUT_REQUEST':
			return {
				// store 에서 보낸 state 가 만들어짐
				...state,
				isLoggedOut: true,
			}
		case 'LOG_OUT_SUCCESS':
			return {
				// store 에서 보낸 state 가 만들어짐
				...state,
				isLoggedOut: false,
				isLoggedIn: false,
				me: null,
			}
		case 'LOG_OUT_FAILURE':
			return {
				// store 에서 보낸 state 가 만들어짐
				...state,
				isLoggedOut: false,
				isLoggedIn: false,
			}
		default:
			return state;
	}
}

export default reducer;