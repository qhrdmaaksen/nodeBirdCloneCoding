const DataTypes = require('sequelize')
const {Model} = DataTypes // DataTypes 안에 Model 객체

//static 함수 사용으로 model 최신화 권장 이유: 타입스크립트 할때 나중에 도움이됨 타입추론이되기때문에
/*sequelize.define{ 이 Model.init 으로 된다고 보면 됨*/
module.exports = class Comment extends Model {
	static init(sequelize) {
		return super.init({ // 상속 받은상태에서 부모를 호출할땐 super 사용
			content: {
				// id: {}, 아이디는 굳이 안적어줘도된다, id 가 기본적으로 들어있다
				type: DataTypes.TEXT, // sequelize 라고 하지않고 그냥 dataTypes 라고 이름 지은거임
				allowNull: false,
			},
			// UserId: 1
			// PostId: 3
		}, {
			// Comment model 에 대한 셋팅
			/*모델 이름이 자동으로 소문자가되고, 복수가되서 users 로 MYSQL 에 테이블 생성*/
			modelName: 'Comment',
			tableName: 'comments',
			charset: 'utf8mb4', // 이모티콘은 mb4 도 넣어줘야함
			collate: 'utf8mb4_general_ci', // 한글,이모티콘 저장
			sequelize, // 연결 객체임, 클래스로 보내줄것임
		})
	}

	static associate(db) {// 관계 설정
		db.Comment.belongsTo(db.User)
		db.Comment.belongsTo(db.Post)
	}
}


/*
		(sequelize, DataTypes) =>{ // 모델의 기본 꼴
	/!*define('Comment' 모델 이름이 자동으로 소문자가되고, 복수가되서
	users 로 MYSQL 에 테이블 생성, sequel 과 mysql 의 규칙*!/
	const Comment = sequelize.define('Comment',{ // 댓글 정보
		// id: {}, 아이디는 굳이 안적어줘도된다, id 가 기본적으로 들어있다
		content: {
			type: DataTypes.TEXT, // sequelize 라고 하지않고 그냥 dataTypes 라고 이름 지은거임
			allowNull: false,
		},
		// UserId: 1
		// PostId: 3
	},{ // Comment model 에 대한 셋팅
		charset: 'utf8mb4', // 이모티콘은 mb4 도 넣어줘야함
		collate: 'utf8mb4_general_ci', // 한글,이모티콘 저장
		sequelize,
	})
	Comment.associate = (db) => {
		db.Comment.belongsTo(db.User)
		db.Comment.belongsTo(db.Post)
	}
	return Comment;
}*/
