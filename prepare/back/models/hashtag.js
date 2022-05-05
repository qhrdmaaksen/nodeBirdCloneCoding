const DataTypes = require('sequelize')
const { Model } = DataTypes

module.exports = class Hashtag extends Model{
	static init(sequelize){
		return super.init({
			// id: {}, 아이디는 굳이 안적어줘도된다, id 가 기본적으로 들어있다
			name: {
				type: DataTypes.STRING(20),
				allowNull: false,
			},
			// UserId: 1
			// PostId: 3
		}, {
			// Hashtag model 에 대한 셋팅
			modelName: 'Hashtag',
			tableName: 'hashtags',
			charset: 'utf8mb4', // 이모티콘은 mb4 도 넣어줘야함
			collate: 'utf8mb4_general_ci', // 한글,이모티콘 저장
			sequelize,
		})
	}
	static associate(db) {
		db.Hashtag.belongsToMany(db.Post, {through: 'PostHashtag'})
	}
}


/*
		(sequelize, DataTypes) =>{ // 모델의 기본 꼴
	/!*define('Hashtag' 모델 이름이 자동으로 소문자가되고, 복수가되서
	users 로 MYSQL 에 테이블 생성, sequel 과 mysql 의 규칙*!/
	const Hashtag = sequelize.define('Hashtag',{ // 해시태그 정보
		// id: {}, 아이디는 굳이 안적어줘도된다, id 가 기본적으로 들어있다
		name: {
			type: DataTypes.STRING(20),
			allowNull: false,
		},
	},{ // Hashtag model 에 대한 셋팅
		charset: 'utf8mb4', // 이모티콘은 mb4 도 넣어줘야함
		collate: 'utf8mb4_general_ci', // 한글,이모티콘 저장
	})
	Hashtag.associate = (db) => {
		db.Hashtag.belongsToMany(db.Post, {through: 'PostHashtag'})
	}
	return Hashtag;
}*/
