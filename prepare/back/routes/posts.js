const express = require("express");
const {Post, User, Image} = require('../models')

const router = express.Router()

router.get('/', async (req, res, next) => { // GET /posts
	try {// 여러개 가져올때 사용(findAll)
		const where = {}
		const posts = await Post.findAll({
			//where: {id: lastId}, // lastId 는 고정되어있기때문에 사용
			// offset: 0, 1번 게시글부터 10번 게시글까지, offset 10이면 11번부터 20번까지
			where,
			limit: 10, // 10 개 가져와라, 10개 가져온 후 또 10개 10개 10개 ...
			order: [['createdAt', 'DESC']], // 2 차원 배열,  DESC 는 최신 게시글 부터 가져옴 오래된순은 ASC
			include: [{
				model: User,
				//attributes: ['id', 'nickname'],
			}, {
				model: Image,
			}, {
				model: Comment,
				include: [{
					model: User,
					//attributes: ['id', 'nickname'],
					//order: [['createdAt', 'DESC']],
				}]
			}],
		})
		console.log(posts)
		res.status(200).json(posts)
	} catch (error) {
		console.error(error)
		next(error)
	}
})

module.exports = router