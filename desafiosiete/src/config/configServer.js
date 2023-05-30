const {connect} = require('mongoose')
const { productModel } = require('../dao/model/product.model')
const { cartModel } = require('../dao/model/cart.model')

let url = 'mongodb+srv://acevedocoder:OvgvzAEu5Eq6gPEP@cluster0.qjk7yms.mongodb.net/Ecommerce'


module.exports = {
    connectDb: async () => {
        try {
            connect(url)
            console.log('Base de datos conectadas')


            
            let products =  await productModel.paginate({gender: "Female"}, {limit:20, page:1})
            
            console.log(products)

            
            const cart = await cartModel.findOne({_id: '6452fbefc7ddcec328f8f962'})            
            
            //console.log(cart.products[2])

        
            
        } catch (err) {
            console.log(err)
        }
    }
}


