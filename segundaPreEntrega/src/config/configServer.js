const {connect} = require('mongoose')
const { productModel } = require('../dao/models/product.model')
const { cartModel } = require('../dao/models/cart.model')

let url = 'mongodb+srv://acevedocoder:OvgvzAEu5Eq6gPEP@cluster0.qjk7yms.mongodb.net/'

module.exports = {
    connectDB: async () => {
        try {
            connect(url)
            console.log('Base de datos conectadas')
            let products = await productModel.paginate({limit:10,page:1})
    
    
            await productModel.create({})
            let productos = await productModel.find({})
            console.log(productos)

            await cartModel.create({
            products: []
            })

            const cart = await cartModel.findById({_id: '6452fbefc7ddcec328f8f962'})
            cart.products.push({product: '6449c1edc1db3bc583eb1fb2'})
            let resp = await cartModel.findByIdAndUpdate({_id: '6452fbefc7ddcec328f8f962'}, cart)
            
            const carts = await cartModel.findOne({_id: '6452fbefc7ddcec328f8f962'})            

            console.log(carts.products[2])
            

            
        } catch (err) {
            console.log(err)
        }
    }
}