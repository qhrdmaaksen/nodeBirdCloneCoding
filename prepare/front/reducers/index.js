import { store } from 'next/dist/build/output/store'
import { HYDRATE} from "next-redux-wrapper";

const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
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

// 이전상태와 액션을 통해 다음 상태를 만들어내는 함수
const rootReducer = (state = initialState, action) => {
  switch (
    action.type // 예전 상태에서 액션에따라 데이터를 바꿔 다음 상태를 리턴
  ) {
    case HYDRATE:
      console.log('HYDRATE', action)
      return {
        ...state,
        ...action.payload,
      }
    case 'LOG_IN':
      return {
        // store 에서 보낸 state 가 만들어짐
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          user: action.data,
        },
      }
    case 'LOG_OUT':
      return {
        // store 에서 보낸 state 가 만들어짐
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
          user: null,
        },
      }
    default:
      return {
        ...state,
      }
  }
}

export default rootReducer
