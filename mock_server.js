const express = require('express');
const app = express();
const bodyParser = require('body-parser');
 

// MiddleWare....

app.get('/', (req, res) => {
    res.send('home');
})

app.get('/signin/:id', (req, res) => {
    const id = req.param.id;
    res.send(id);
})






// Server Listener....

app.listen('3002', ()=> {
    console.log('server started at port 3002');
})