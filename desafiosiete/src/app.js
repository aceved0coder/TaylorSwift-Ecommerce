const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const objectConfig = require('./config/configServer')
const appRouter = require('./routes')

// ______________________________________________________


const FileStore  = require('session-file-store')
const {create} = require('connect-mongo') 

const handlebars = require('express-handlebars')
const { connect } = require('mongoose')

// passport 
const { initPassport, initPassportGithub } = require('./config/passport.config')
const passport = require('passport')
//__________________________________________________________________________
const { Server } = require('socket.io')

const app = express()
const PORT = 8080 //|| process.env.PORT

const httpServer = app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto: ${PORT}`)
})

const io = new Server(httpServer)

objectConfig.connectDb()



app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')


app.use(express.json()) 
app.use(express.urlencoded({extended: true}))

app.use('/static', express.static(__dirname+'/public'))
app.use(cookieParser('P@l@braS3cr3t0'))

// mongo
app.use(session({
        store: create({
            mongoUrl: 'mongodb+srv://acevedocoder:OvgvzAEu5Eq6gPEP@cluster0.qjk7yms.mongodb.net/Ecommerce',
            mongoOptions: {
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            ttl: 1000000*6000
        }),
        secret: 'secretCoder',
        resave: false,
        saveUninitialized: false
})) 

// initPassport()
initPassport()
passport.use(passport.initialize())
passport.use(passport.session())

initPassportGithub()
passport.use(passport.initialize())
passport.use(passport.session())

app.use(appRouter)

let messages = []

io.on('connection', socket => {
    console.log('Nuevo cliente conectado')
    socket.on('message', data => {
        // console.log(data)
        messages.push(data)
        io.emit('messageLogs', messages)
    })

    socket.on('authenticated', data => {
        socket.broadcast.emit('newUserConnected', data)
    })

})

app.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).send('Todo mal')
})