const {connect} = require('mongoose')

module.exports = {
    connectDb: ()=>{
        connect('mongodb+srv://acevedocoder:OvgvzAEu5Eq6gPEP@cluster0.qjk7yms.mongodb.net/')
        console.log('Base de datos conectada')
    }
}
