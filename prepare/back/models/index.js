'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development'; // 환경 변수
const config = require('../config/config')[env];
const db = {};
// node 와 mysql 을 연결해줌, 드라이브에 설정 정보를 전해줌
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
