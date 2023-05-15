import express  from 'express'
import mainRoutes from './routes/index'
import path from 'path'
import mustache from 'mustache-express'
import dotenv from 'dotenv'
import bodyParser = require('body-parser')

dotenv.config()

const server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname,'views'))
server.engine('mustache',mustache()) 

server.use(express.static(path.join(__dirname,'../public')))
server.use(express.json());
server.use(express.urlencoded({extended:true}))

server.use(mainRoutes)

//pagina não encontrada 

server.use((req,res) =>{
    res.render('pages/error')
})

//METODO POST



server.listen(process.env.PORT,()=> {
    console.clear()
    console.log('o servidor esta rodando')
} )
