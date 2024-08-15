const express = require('express')
const app = express()
const dotenv = require('dotenv')
const db_connect = require('./utils/db')
const cors = require('cors')
dotenv.config()


if(process.env.mode === 'production'){
app.use(cors())
}else{
    app.use(cors({
        origin : "*"
    }))
}

app.use('/',require('./routes/authRoutes'))

app.get('/',(req,res)=>res.send('Hello World'))

const port = process.env.port

db_connect()

app.listen(port,()=> console.log(`server is running on port ${port}!`))
