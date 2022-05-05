// hashtag/[tag].js

import {useRouter} from "next/router";
import wrapper from "../../store/configureStore";
import axios from 'axios'
import {END} from 'redux-saga'
import {LOAD_MY_INFO_REQUEST} from "../../reducers/user";
import {LOAD_HASHTAG_POSTS_REQUEST, LOAD_POSTS_REQUEST} from '../../reducers/post'
import {getStaticProps} from "../about";
import AppLayout from '../../components/AppLayout'
import PostCard from "../../components/PostCard";
import {useDispatch, useSelector} from "react-redux";
import Head from "next/head";
import {useEffect} from "react";


const Hashtag = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const {tag} = router.query
	// loadPostsLoading 은 loadHashtagPostsLoading 이지만 reducer 에서 같이 쓰기로 했기에 loadPostsLoading
	const {mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state) => state.post)

	// 스크롤이 끝까지 내려갔을때 다시 로딩하게하는코드
	/*유즈 이펙트에서 윈도우 addEventListener 를 사용할땐 항상 리턴을 해줘야한다.
			스크롤했던거 해제해줘야한다, 안그러면 메모리에 쌓여있는다.*/
	useEffect(() => {
		const onScroll = () => {
			// (높이를 나타내는것중)scrollY,clientHeight,scrollHeight 를 많이사용
			console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight)
			if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
				if (hasMorePosts && !loadPostsLoading) { // 기존에 로딩을 하고있을땐 이부분이 실행이안됨, 로딩이 끝나면 실행
					dispatch({ // 다 내리면 그때 새로운 것 로딩
						type: LOAD_HASHTAG_POSTS_REQUEST,
						lastId: mainPosts[mainPosts.length - 1]&& mainPosts[mainPosts.length - 1].id, // 마지막 게시글의 id
						data: tag,
					});
				}
			}
		};
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, [mainPosts.length, hasMorePosts, tag, loadPostsLoading]);

	return (
			<AppLayout>
				{mainPosts.map((c) => (
						<PostCard key={c.id} post={c} />
				))}
			</AppLayout>
	);
};

/*getServerSideProps&getStaticProps 안의 context 에서는 context.params.id&context.query.id 하면
useRouter 에 똑같이 접근 할 수 있다*/
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
	console.log(context)
	const cookie = context.req ? context.req.headers.cookie : '';
	console.log('dynamic routing Post getServerSideProps Start ::')
	axios.defaults.headers.Cookie = ''
	if (context.req && cookie) {
		axios.defaults.headers.Cookie = cookie
	}
	context.store.dispatch({ // 내 정보 요청
		type: LOAD_MY_INFO_REQUEST,
	})
	context.store.dispatch({ // 단일 게시글 요청
		type: LOAD_HASHTAG_POSTS_REQUEST,
		data: context.params.tag, //
	})
	context.store.dispatch(END)
	await context.store.sagaTask.toPromise()
	return { props : {}}
})

export default Hashtag