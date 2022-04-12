//import { store } from 'next/dist/build/output/store'
import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux'
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
const rootReducer = combineReducers({
  // user 이니셜스테이트, post 이니셜스테이트 컴바인 리듀서가 알아서 한방에 묶어줌
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action)
        return { ...state, ...action.payload }
      default:
        return state
    }
  },
  user,
  post,
})

export default rootReducer
