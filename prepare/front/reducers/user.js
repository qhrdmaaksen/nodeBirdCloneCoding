export const initialState = {
	isLoggedIn: false,
	user: null,
	signUpData: {},
	loginData: {},
}

// 액션 생성기
export const loginAction = (data) => {
	return {
		type: 'LOG_IN',
		data,
	}
}
export const logoutAction = () => {
	return {
		type: 'LOG_OUT',
	}
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOG_IN':
			return {
				// store 에서 보낸 state 가 만들어짐, state 자체가 uiser.js 의 state 임
					...state,
					isLoggedIn: true,
					user: action.data,
			}
		case 'LOG_OUT':
			return {
				// store 에서 보낸 state 가 만들어짐
					...state,
					isLoggedIn: false,
					user: null,
			}
		default:
			return state;
	}
}

export default reducer ;