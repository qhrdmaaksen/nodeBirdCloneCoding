//import { store } from 'next/dist/build/output/store'
import {HYDRATE} from 'next-redux-wrapper'
import {combineReducers} from 'redux'
import user from './user'
import post from './post'

// const initialState = {
// 	user: {},
// 	post: {},
// }

// 비동기 액션 생성기

// 액션 생성기
/*const changeNickname = (data) => {
	return {
		type: 'CHANGE_NICKNAME',
		data,
	}
}
changeNickname('vitamin777')*/
/*{
		type: 'CHANGE_NICKNAME',
		data: 'vitamin777',
}*/

/*store.dispatch(changeNickname('vitamin7777777'))*/

// 리듀서 : 이전상태와 액션을 통해 다음 상태를 만들어내는 함수
/* CSR REDUCER
const rootReducer = combineReducers({
	// user 이니셜스테이트, post 이니셜스테이트 컴바인 리듀서가 알아서 한방에 묶어줌
	index: (state = {}, action) => {
		switch (action.type) {
			case HYDRATE:
				console.log('HYDRATE', action)
				return {...state, ...action.payload}
			default:
				return state
		}
	},
	user,
	post,
})*/

// SSR
const rootReducer = (state, action) => { // (이전상태 state, 액션) => 다음상태
	switch (action.type) {
		case HYDRATE:
			console.log('reducer rootReducer HYDRATE :: ', action)
			return action.payload
		default: {
			const combinedReducer = combineReducers({
				user,
				post,
			})
			return combinedReducer(state, action)
		}
	}
}

/*reducers/index.js 보시면 user랑 post를 불러와서 합치고 있습니다.
rootReducer가 state고, user와 post는 각각 state.user, state.post가 됩니다.
user.js의 me는 state.user.me가 됩니다.*/
export default rootReducer
