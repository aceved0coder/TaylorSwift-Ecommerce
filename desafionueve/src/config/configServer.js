const {connect} = require('mongoose')
const dotenv = require('dotenv')
const { commander } = require('../utils/commander')

const { mode } = commander.opts()
dotenv.config({
    path: mode === 'development' ? './.env.development': './.env.production' 
})

// let url = 'mongodb+srv://acevedocoder:OvgvzAEu5Eq6gPEP@cluster0.qjk7yms.mongodb.net/Ecommerce'
let url = process.env.MONGO_URL_LOCAL


module.exports = {
    port: process.env.PORT,
    jwt_secret_key: process.env.JWT_SECRET_KEY,
    connectDB: async () => {
        try {
            connect(url)
            console.log('Base de datos conectadas')             
        } catch (err) {
            console.log(err)
        } 
    }
}




