import React from 'react' // Next 에서는 이 구문이 필요가 없다.
import {useSelector} from "react-redux";
import AppLayout from '../component/AppLayout'

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user)
  const mainPosts = useSelector((state) => state.posts.mainPosts)
  return (
    <AppLayout>
      {/*AppLayout 을 사용한다, 만약 다른 레이아웃을 사용하고싶다면 따로 component에 만들어서 이와같이 감싸면된다.*/}
      {/*뭔가 묶일 수 있는 단위가있을 것 같으면 먼저 컴포넌트 이름을 정해주자*/}
      { isLoggedIn && <PostForm/>}
      { mainPosts.map((post) => <PostCard key={post.id} post={post} /> )}
      {/*이와같이 AppLayout 으로 감싼 이부분은 AppLayout 의 children 이된다.*/}
    </AppLayout>
  )
}

export default Home
