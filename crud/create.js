require('../connection')

const Product = require('../models/Product')

module.exports = async (name, description, price) => {
    
        const product = new Product({
            name: name,
            description: description,
            price: price
        })
        await product.save()
        console.log('Product saved')
}