import { createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, compose, createStore } from 'redux'
import reducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = () => {
  const middlewares = []
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares))
  const store = createStore(reducer, enhancer)
  store.dispatch({
    // 디스패치하는 순간 타입과 데이터가 리듀서로 보내진다.
    type: 'CHANGE_NICKNAME',
    data: 'vitamin777',
  })
  return store
}

const wrapper = createWrapper(
  configureStore,
  // 옵션객체 디버그가 트루이면 리덕스에관해서 자세한 설명이나오기때문에 개발할땐 true 로 놓자
  { debug: process.env.NODE_ENV === 'development' },
)

export default wrapper
