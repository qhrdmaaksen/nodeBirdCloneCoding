const { createWrapper } = require('next-redux-wrapper')

const configureStore = () => {

}

const wrapper = createWrapper(configureStore,
		// 옵션객체 디버그가 트루이면 리덕스에관해서 자세한 설명이나오기때문에 개발할땐 true 로 놓자
		{ debug: process.env.NODE_ENV === 'development'})

export default wrapper