const DataTypes = require('sequelize')
const { Model } = DataTypes

module.exports = (sequelize, DataTypes) =>{ // 모델의 기본 꼴
	/*define('Comment' 모델 이름이 자동으로 소문자가되고, 복수가되서
	users 로 MYSQL 에 테이블 생성, sequel 과 mysql 의 규칙*/
	const Comment = sequelize.define('Comment',{ // 댓글 정보
		// id: {}, 아이디는 굳이 안적어줘도된다, id 가 기본적으로 들어있다
		content: {
			type: DataTypes.TEXT,
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
}