module.exports = (sequelize, DataTypes) =>{ // 모델의 기본 꼴
	/*define('Post' 모델 이름이 자동으로 소문자가되고, 복수가되서
	users 로 MYSQL 에 테이블 생성, sequel 과 mysql 의 규칙*/
	const Post = sequelize.define('Post',{ // 게시글 정보
		// id: {}, 아이디는 굳이 안적어줘도된다, id 가 기본적으로 들어있다
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},{ // Post model 에 대한 셋팅
		charset: 'utf8mb4', // 이모티콘은 mb4 도 넣어줘야함
		collate: 'utf8mb4_general_ci', // 한글,이모티콘 저장
	})
	Post.associate = (db) => {
		// 게시물은 작성작에게 속해있다 (다대 일 관계), post.addUser 단수, post.getUser 게시글의 작성자 가져오는것, post.setUser 게시글 바꾸는 것
		db.Post.belongsTo(db.User)
		db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'}) // 다대 다 관계, post.addHashtags 복수
		db.Post.hasMany(db.Comment) // 게시물에 댓글이 많이 있다 (일대 다 관계), post.addComments 복수, post.getComments 댓글 가져오는것
		db.Post.hasMany(db.Image) // post.addImages, post.getImages 이미지 가져오는 것
		/*다대다,임의테이블 이름(Like) 설정, 나중에 as(별칭) 에따라
		post.getLikers 처럼 게시글 좋아요 누른 사람을 가져오게됨*/
		// post.addLikers (복수) 게시글에 좋아요 누른 사람 생김, poset.removeLikers 게시글에 좋아요 누른 사람 제거
		db.Post.belongsToMany(db.User, {through: 'Like', as: 'Likers'})
		// PostId 에서 RetweetId 로 바뀜
		db.Post.belongsTo(db.Post, {as:'Retweet'}) // post.addRetweet 단수
	}
	return Post;
}