module.exports = (sequelize, DataTypes) => { // 모델의 기본 꼴
	/*define('User' 모델 이름이 자동으로 소문자가되고, 복수가되서
	users 로 MYSQL 에 테이블 생성, sequel 과 mysql 의 규칙*/
	const User = sequelize.define('User', { // 사용자 정보
		// id: {}, 아이디는 굳이 안적어줘도된다, id 가 기본적으로 들어있다
		// 각각의 컬럼들
		email: {
			type: DataTypes.STRING(50), // STRING,TEXT,BOOLEAN,INTEGER,FLOAT,DATETIME 등
			allowNull: false, // 필수
			unique: true, // 고유한 값
		},
		nickname: {
			type: DataTypes.STRING(30),
			allowNull: false, // 필수
		},
		password: {
			type: DataTypes.STRING(100), // 비밀번호는 암호화를 하기때문에 넉넉히 길이늘려놈
			allowNull: false, // 필수
		},
	}, { // user model 에 대한 셋팅
		charset: 'utf8',
		collate: 'utf8_general_ci', // 한글 저장
	})
	User.associate = (db) => { // 관계 설정
		db.User.hasMany(db.Post) // 사람이 포스트를 여러개가질수있다 뜻
		db.User.hasMany(db.Comment)
		/*다대다,임의테이블 이름(Like) 설정, 나중에 as 에따라
		user.getLiked 처럼 게시글 좋아요 누른 사람을 가져오게됨*/
		db.User.belongsToMany(db.Post, {through: 'Like', as: 'Liked'})
		// 같은 테이블을 사용 할땐 as 및 foreignKey 설정해주며, 서로 반대로 foreignKey 를 설정해주면 key 이름으로 설정됨
		db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followers', foreignKey: 'FollowingId'})
		db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followings', foreignKey: 'FollowerId'})
	}
	return User;
}