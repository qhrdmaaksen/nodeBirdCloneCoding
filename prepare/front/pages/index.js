import React, {useEffect} from 'react' // Next 에서는 이 구문이 필요가 없다.
import {useDispatch, useSelector} from 'react-redux'
import {END} from 'redux-saga'
import AppLayout from '../component/AppLayout'
import PostForm from '../component/PostForm'
import PostCard from "../component/PostCard";
import {LOAD_POSTS_REQUEST} from '../reducers/post'
import {LOAD_MY_INFO_REQUEST} from '../reducers/user'
import wrapper from "../store/configureStore";

const Home = () => {
	const dispatch = useDispatch()
	const {me} = useSelector((state) => state.user)
	const {mainPosts, hasMorePosts, loadPostsLoading, retweetError} = useSelector((state) => state.post)


	useEffect(() => { // retweet 실패 시 alert 출력
		if (retweetError) {
			alert(retweetError)
		}
	}, [retweetError])

	/* CSR
	useEffect(() => { // 컴포넌트 디드마운트와 같은 효과 가능 , 뒤에 빈배열만 넣는다면
		dispatch({ // 매번 로그인 상태를 복구해주기 위해서 만듬
			type: LOAD_MY_INFO_REQUEST,
		});
		dispatch({
			type: LOAD_POSTS_REQUEST,
		});
	}, []);*/

	// 스크롤이 끝까지 내려갔을때 다시 로딩하게하는코드
	/*유즈 이펙트에서 윈도우 addEventListener 를 사용할땐 항상 리턴을 해줘야한다.
			스크롤했던거 해제해줘야한다, 안그러면 메모리에 쌓여있는다.*/
	useEffect(() => {
		function onScroll() {
			// (높이를 나타내는것중)scrollY,clientHeight,scrollHeight 를 많이사용
			console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight)
			if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
				if (hasMorePosts && !loadPostsLoading) { // 기존에 로딩을 하고있을땐 이부분이 실행이안됨, 로딩이 끝나면 실행
					const lastId = mainPosts[mainPosts.length - 1]?.id; // 마지막 게시글의 id
					dispatch({ // 다 내리면 그때 새로운 것 로딩
						type: LOAD_POSTS_REQUEST,
						lastId,
					})
				}
			}
		}

		window.addEventListener('scroll', onScroll)
		return () => {
			window.removeEventListener('scroll', onScroll)
		};
	}, [hasMorePosts, loadPostsLoading, mainPosts]);

	return (
			<AppLayout>
				{/*AppLayout 을 사용한다, 만약 다른 레이아웃을 사용하고싶다면 따로 component 에 만들어서 이와같이 감싸면된다.*/}
				{/*뭔가 묶일 수 있는 단위가있을 것 같으면 먼저 컴포넌트 이름을 정해주자*/}
				{me && <PostForm/>} {/*모두 참 인경우 마지막 피 연산자를 반환*/}
				{mainPosts.map((post) => (
						<PostCard key={post.id} post={post}/>
				))}
				{/*이와같이 AppLayout 으로 감싼 이부분은 AppLayout 의 children 이된다.*/}
			</AppLayout>
	)
}

//  Home 보다 먼저 실행이 된다 ( server 쪽에서 실행) (SSR)
// context 는 요청/응답과 SSR에 관련된 정보가 들어있는 객체이고요
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
	context.store.dispatch({ // 매번 로그인 상태를 복구해주기 위해서 만듬
		type: LOAD_MY_INFO_REQUEST,
	});
	context.store.dispatch({
		type: LOAD_POSTS_REQUEST,
	});
	// request 가 success 로 바뀌기까지 기다려주기 위한 장치
	context.store.dispatch(END)
	await context.store.sagaTask.toPromise()
	console.log('context :: ', context)
})

export default Home
