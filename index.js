require('./connection')

const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const getUser = require('./crud/findOne')
const getProducts = require('./crud/find')
const setProduct = require('./crud/create')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    const read = fs.createReadStream('./static/index.html')
    read.pipe(res)
})

app.get('/user', async(req, res) => {
    const data = await getUser()
    res.send(data.toString())
})

app.get('/product', async(req, res) => {
    const data = await getProducts()
    res.json(data)
})

app.post('/product', async(req, res) => {
    await setProduct(req.body.name, req.body.description, req.body.price)
    res.redirect('/product')
})

app.use((req, res) => {
    res.status(404).send('404 not found')
})

app.listen(3000)
console.log('Server is running on port 3000');