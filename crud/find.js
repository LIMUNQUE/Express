require('../connection')
const Product = require('../models/Product')

module.exports = async function getProducts() {
    const products = await Product.find().lean()
    return products
}