const express = require('express')
const router = express.Router()

const { createProduct } = require('../controller/productController')



router.post('/product', createProduct)
//router.route('/product').get(testController)

module.exports = router