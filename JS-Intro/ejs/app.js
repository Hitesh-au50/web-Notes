import express from 'express' 

const app = express()

const port = process.env.PORT || '3000'

import web from './routes/web.js' 

app.set('view engine' , "ejs")

app.use ('/' , web)


app.listen(port , () => {
    console.log(`the server  is reuuning in port no is ${port}`)
})