const express = require('express');
const app = express();
const bodyParser = require('body-parser');
 

// MiddleWare....

app.get('/',(req, res)=> {
    console.log('from the get home page');
})

app.post ('/', (req, res)=> {
    console.log('from the post home page');
})

app.put('/', (req, res)=> {
    console.log('from the host page');
})

app.post('/signin', (req, res)=> {
    console.log('from the post signin page');
})

app.get('/signin', (req, res)=> {
    console.log('form the get signing page');
})






// Server Listener....

app.listen('3002', ()=> {
    console.log('server started at port 8000');
})