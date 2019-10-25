require('dotenv').config()
const express = require('express')
const massive = require('massive')
const products_controller = require("./products_controller"); // wow

const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env


massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance)
})
.catch(err => console.log(err))


app.use(express.json());   

//create - > post
//getAll - > get
//getOne - > get
//update - > put .. not *update
//delete - > delete

app.post('/api/products', products_controller.create)
app.get('/api/products', products_controller.getAll)
app.get('/api/products/:id', products_controller.getOne)
app.put('/api/products/:id', products_controller.update)
app.delete('/api/products/:id', products_controller.deleteOne)


    app.listen(SERVER_PORT, () => {
        console.log(`${SERVER_PORT} is working`)
    })