// 동적 라우팅용 페이지
// post/[id].js

import {useRouter} from "next/router";
import wrapper from "../../store/configureStore";
import axios from 'axios'
import {END} from 'redux-saga'
import {LOAD_MY_INFO_REQUEST} from "../../reducers/user";
import {LOAD_POST_REQUEST} from '../../reducers/post'
import {getStaticProps} from "../about";
import AppLayout from '../../component/AppLayout'
import PostCard from "../../component/PostCard";
import {useSelector} from "react-redux";
import Head from "next/head";


const Post = () => {
	const router = useRouter()
	const {id} = router.query
	const {singlePost} = useSelector((state) => state.post)

	return (
			<AppLayout>
				<Head>
					<title>
						{singlePost.User.nickname} 님의 글
					</title>
					<meta name="description" content={singlePost.content} /> {/*게시글 설명*/}
					{/*og: 는 카톡 공유하기 같은거에 미리보기로 이미지,게시물 제목등 표기*/}
					<meta property="og:title" content={`${singlePost.User.nickname} 님의 게시글`} />
					<meta property="og:description" content={singlePost.content} />
					{/*이미지가 없는 게시물을 공유하면 favicon 이 화면에 뜸, 이미지가 만약 있다면 첫번째 이미지를 공유화면에 띄우기*/}
					<meta property="og:image" content={singlePost.Images[0] ? singlePost.Images[0].src : 'https://nodebirds.com/favicon.ico'} />
					<meta property="og:url" content={`https://nodebird.com/post/${id}`} />
				</Head>
				<PostCard post={singlePost}/>
			</AppLayout>
	)
}

/*getServerSideProps&getStaticProps 안의 context 에서는 context.params.id&context.query.id 하면
useRouter 에 똑같이 접근 할 수 있다*/
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
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
		type: LOAD_POST_REQUEST,
		data: context.params.id, //
	})
	context.store.dispatch(END)
	await context.store.sagaTask.toPromise()
})

export default Post