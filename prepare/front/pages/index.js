import React, {useEffect} from 'react' // Next 에서는 이 구문이 필요가 없다.
import {useDispatch, useSelector} from 'react-redux'
import {END} from 'redux-saga'
import axios from 'axios'
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


//  Home 보다 먼저 실행이 된다 ( browser 가 아닌 front server 쪽에서 실행) (SSR)
// context 는 요청/응답과 SSR에 관련된 정보가 들어있는 객체이고요
/*(브라우저) 쿠키 프론트서버로 전달 ->  (프론트서버) 전달받은 쿠키 저장해서
백엔드 서버로 요청 -> 백엔드서버 쿠키에 따른 데이터 응답 -> 프론트서버
데이터와 컴포넌트 조합 -> 브라우저*/
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
	// server 쪽에서 실행되면 context.req 가 존재함, 서버쪽 쿠키 전달
	/*getServerSideProps는 프론트 서버에서 실행되는 코드입니다. 사용자들은 많은 수의 브라우저로 접근하지만
	프론트 서버는 하나이므로 axios.defaults.headers.Cookie=쿠키 로 쿠키를 설정하게 되면 프론트 서버에
	이 쿠키가 설정되어 버립니다. 모든 브라우저가 프론트 서버를 거쳐 백엔드
	서버로 요청을 보낼 때 같은 쿠키가 적용되어버리는 것입니다.	그래서 한 번 설정했다가 요청을 보낸 다음에는
	axios.defaults.headers.Cookie = ''로 비워주는 것입니다.*/
	const cookie = context.req ? context.req.headers.cookie : '';
	axios.defaults.headers.Cookie = ''; // 쿠키를 사용하지 않고 요청을 보낼때는 비워줌
	// cookie 공유 문제를 해결 장치
	if (context.req && cookie) { // 서버일때와 cookie 가 있을때
		axios.defaults.headers.Cookie = cookie; // 쿠키를 써서 요청을 보낼땐 쿠키를 넣어줌
	}
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
