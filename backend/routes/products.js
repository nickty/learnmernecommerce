const express = require('express')
const router = express.Router()

const { createProduct, getProduct, getSignleProduct, updateProduct, deleteProduct } = require('../controller/productController')



router.post('/product', createProduct)
//router.route('/product').get(testController)

router.get('/product', getProduct)

router.get('/product/:id', getSignleProduct)

router.put('/product/:id', updateProduct)

router.delete('/product/:id', deleteProduct)

module.exports = router