const {connect} = require('mongoose')


let url = 'mongodb+srv://acevedocoder:OvgvzAEu5Eq6gPEP@cluster0.qjk7yms.mongodb.net/Ecommerce'

module.exports = {
    privateKey: 'Ecommerce', // procees.env.PRIVATE_KEY
    connectDb: async ()=>{
        connect(url)
        console.log('Base de datos conectada')
             
    }
}


