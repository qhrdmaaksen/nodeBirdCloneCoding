export const initialState = {
	isLoggedIn: false,
	me: null,
	signUpData: {},
	loginData: {},
}

// 로그인 액션 생성기
export const loginAction = (data) => { // 함수를 리턴하는 비동기 액션 크리에이터가 추가
	return (dispatch, getState) => {
		const state = getState()
		dispatch(loginRequestAction())
		axios.post('/api/login')
				.then((res) => {
					dispatch(loginSuccessAction(res.data))
				})
				.catch((err) => {
					dispatch(loginFailureAction(err))
				})
	}
}
export const loginRequestAction = (data) => {
	return {
		type: 'LOG_IN_REQUEST',
		data,
	}
}
export const loginSuccessAction = (data) => {
	return {
		type: 'LOG_IN_SUCCESS',
		data,
	}
}
export const loginFailureAction = (data) => {
	return {
		type: 'LOG_IN_FAILURE',
		data,
	}
}
// 로그아웃 액션 생성기
export const logoutAction = (data) => {
	return (dispatch) => {
		axios.post('/api/logout')
				.then(() => {
					dispatch(logoutSuccessAction())
				})
				.catch(() => {
					dispatch(logoutFailureAction())
				})
	}
}
export const logoutRequestAction = () => {
	return {
		type: 'LOG_OUT_REQUEST',
	}
}
export const logoutSuccessAction = () => {
	return {
		type: 'LOG_OUT_SUCCESS',
	}
}
export const logoutFailureAction = () => {
	return {
		type: 'LOG_OUT_FAILURE',
	}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOG_IN':
			return {
				// store 에서 보낸 state 가 만들어짐, state 자체가 uiser.js 의 state 임
				...state,
				isLoggedIn: true,
				me: action.data,
			}
		case 'LOG_OUT':
			return {
				// store 에서 보낸 state 가 만들어짐
				...state,
				isLoggedIn: false,
				me: null,
			}
		default:
			return state;
	}
}

export default reducer;