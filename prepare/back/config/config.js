const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  "development": {
    "username": "nodeBirdDB",
    "password": process.env.DB_PASSWORD, // .env password setting
    "database": "react-nodeBird",
    "host": "127.0.0.1",
    "port": "3306",
    "dialect": "mysql"
  },
  "test": {
    "username": "nodeBirdDB",
    "password": process.env.DB_PASSWORD, // .env password setting
    "database": "react-nodeBird",
    "host": "127.0.0.1",
    "port": "3306",
    "dialect": "mysql"
  },
  "production": {
    "username": "nodeBirdDB",
    "password": process.env.DB_PASSWORD, // .env password setting
    "database": "react-nodeBird",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
