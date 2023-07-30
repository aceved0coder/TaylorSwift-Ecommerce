const {connect} = require('mongoose')

module.exports = {
    privateKey: 'comision39750', // procees.env.PRIVATE_KEY
    connectDb: ()=>{
        connect('mongodb+srv://acevedocoder:OvgvzAEu5Eq6gPEP@cluster0.qjk7yms.mongodb.net/Ecommerce')
        console.log('Base de datos conectada')
    }
}



