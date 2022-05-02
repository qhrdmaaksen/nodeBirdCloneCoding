'use strict';
const Sequelize = require('sequelize');
const comment = require('./comment')
const hashtag = require('./hashtag')
const image = require('./image')
const post = require('./post')
const user = require('./user')

const env = process.env.NODE_ENV || 'development'; // 환경 변수
const config = require('../config/config')[env];
const db = {};
// node 와 mysql 을 연결해줌, 드라이브에 설정 정보를 전해줌
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// 모델 불러오기
/*모델들의 모양이 module.export 로 함수인 모양이있다
함수를 require 해서 함수를 실행해줄것이며, 함수 내부가 실행되면서
모델이 실제로 sequelize 에 등록이된다*/
/*db.Comment = require('./comment')(sequelize, Sequelize)
db.Hashtag = require('./hashtag')(sequelize, Sequelize)
db.Image = require('./image')(sequelize, Sequelize)
db.Post = require('./post')(sequelize, Sequelize)
db.User = require('./user')(sequelize, Sequelize)*/
db.Comment = comment
db.Hashtag = hashtag
db.Image = image
db.Post = post
db.User = user
//  db.object 들 반복문
Object.keys(db).forEach(modelName => {
	db[modelName].init(sequelize)
})

// db 를 반복문 돌면서 db 에서 찾아냄, 모델들의 associate 를 실행해줌
Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
