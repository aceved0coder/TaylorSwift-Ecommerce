const express = require('express')
const { connectDb } = require('./config/configServer');
const routerServer = require('./routes')
const logger = require('morgan')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const FileStore  = require('session-file-store')
const handlebars = require('express-handlebars')
const { connect } = require('mongoose')


const app = express()
const PORT = 8080

connectDb()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');

  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/static',express.static(__dirname+'/public'))
app.use(logger('dev'))

app.use(cookieParser('P@l@braS3cr3t0'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')

app.use(session({
      secret: 'secretCoder',
      resave: true,
      saveUninitialized: true
 })) 



app.use(routerServer)


app.use((err, req, res, next)=>{
  console.log(err)
  res.status(500).send('Todo mal')
})

