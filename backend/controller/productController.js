const Product =  require('../models/products')

exports.createProduct = async (req, res, next) => {
     
    const product = await Product.create(req.body); 

    res.status(201).json({
        success: true, 
        product
    })
}

