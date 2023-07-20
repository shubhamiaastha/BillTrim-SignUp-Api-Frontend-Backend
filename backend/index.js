const express = require('express')
const mongoose = require('mongoose')
const PORT = 3001
const app = express()
app.use(express.json())
const cors = require('cors');   
app.use(cors())



app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use(require('./router/userRouter'))

const Server = '127.0.0.1:27017'    
const db = 'Task-5'


mongoose.connect(`mongodb://${Server}/${db}`)
    .then(() => {


        app.listen(PORT, () => {
            console.log('Server is Started.......')

        })

    }).catch((err) => {
        console.log(err);
    })


