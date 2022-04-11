export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '비타민',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [{ src: '' }, { src: '' }, { src: '' }],
      Comments: [
        {
          User: {
            nickname: 'nero',
          },
          content: '개정판이 나왔네요!?',
        },
        {
          User: {
            nickname: 'hero',
          },
          content: '정말정말 신기하당!',
        },
      ],
    },
  ],
  imagePaths: [], // 이미지 경로들이 저장됨
  postAdded: false, // 게시물 추가가 완료되었을때 true 변환
}

//게시글 작성하는 액션
const ADD_POST = 'ADD_POST'; // 변수로 따로 만들어줘야 중간에 오타가나는 일을 막을 수 있다
export const addPost = {
  type: ADD_POST,
}

const dummyPost = {
  id: 2,
  content: '더미데이터입니당',
  User: {
    id: 1,
    nickname: 'vitamin',
  },
  Images: [],
  Comments: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
      ...state,
        mainPost: [dummyPost, ...state.mainPosts], // 불변성 지켜주며 앞에다가 추가해야 게시글 위에올라감
        postAdded: true,
      }
    default:
      return state
  }
}

export default reducer
