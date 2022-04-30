import {createWrapper} from 'next-redux-wrapper'
import {applyMiddleware, compose, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
//import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers'
import rootSaga from '../sagas'


// const loggerMiddleware = ({ dispatch, getState}) => (next) => (action) => {
//   console.log(action) // 미들웨어를 활용해 리덕스 데브툴즈 처럼 액션 로그 찍히게 하기
//   return next(action)
// }

const configureStore = (context) => {
	console.log('configureStore context :: ', context)
	const sagaMiddleware = createSagaMiddleware() // saga 설정 방법
	const middlewares = [sagaMiddleware]
	const enhancer =
			process.env.NODE_ENV === 'production'
					? compose(applyMiddleware(...middlewares))
					: composeWithDevTools(applyMiddleware(...middlewares))
	const store = createStore(reducer, enhancer)
	store.sagaTask = sagaMiddleware.run(rootSaga)
	return store
}
const wrapper = createWrapper(
		configureStore,
		// 옵션객체 디버그가 트루이면 리덕스에관해서 자세한 설명이나오기때문에 개발할땐 true 로 놓자
		{debug: process.env.NODE_ENV === 'development'},
)

export default wrapper
