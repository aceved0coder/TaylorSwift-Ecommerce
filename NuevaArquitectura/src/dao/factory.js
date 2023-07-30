const mongoose = require('mongoose')
let ProductDao

switch ('mongo') {
    case 'mongo':
        // conección
        mongoose.connect('mongodb+srv://acevedocoder:OvgvzAEu5Eq6gPEP@cluster0.qjk7yms.mongodb.net/Ecommerce')
        console.log('db conectada')

        const ProductDaoMongo = require('./mongo/product.mongo')

        ProductDao = ProductDaoMongo
        break;

    default:
        break;
}

module.exports = {
    ProductDao
}