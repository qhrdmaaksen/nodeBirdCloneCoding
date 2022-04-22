module.exports = (sequelize, DataTypes) =>{ // 모델의 기본 꼴
	/*define('Image' 모델 이름이 자동으로 소문자가되고, 복수가되서
	users 로 MYSQL 에 테이블 생성, sequel 과 mysql 의 규칙*/
	const Image = sequelize.define('Image',{ // 이미지 정보
		// id: {}, 아이디는 굳이 안적어줘도된다, id 가 기본적으로 들어있다
		src: {
			type: DataTypes.STRING(200),
			allowNull: false,
		},
	},{ // Image model 에 대한 셋팅
		charset: 'utf-8', // 이모티콘은 mb4 도 넣어줘야함
		collate: 'utf8_general_ci', // 한글,이모티콘 저장
	})
	Image.associate = (db) => {
		db.Image.belongsTo(db.Post) // 이미지는 Post (다대 1관계)
	}
	return Image;
}