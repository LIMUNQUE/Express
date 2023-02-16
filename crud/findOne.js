require('../connection')
const Product = require('../models/Product')

module.exports = async function getUser() {
    const products = await Product.findOne()
    return products
}