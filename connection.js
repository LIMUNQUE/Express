// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })

// server.listen(3000);
// console.log('Server is running on port 3000');



// const express = require('express');

// const app = express();

// app.get('/', (req, res)=> {
//     res.send('Hello World')
// })

// app.get('/json', (req, res)=> {
//     res.json({'name': 'CANUTO'})
// })

// app.post('/products', (req, res)=> {
//     res.send('Lista de proudctos')//Put, delete
// })

// app.use((req, res)=> {
//     res.status(404).send('404 Not Found')
// })

// app.listen(3000)
// console.log('Server is running on port 3000');


const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/test'

mongoose.set('strictQuery', false);
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open', _ => {
    console.log('Database is connected to', uri)
})

mongoose.connection.on('error', err => {
    console.log(err)
})