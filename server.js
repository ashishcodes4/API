const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const db = {
    users: [
        {
            id: "123",
            name: "ashish",
            email: "ashish@email.com",
            password: "cookies",
            joinDate: new Date()
        },
        {
            id: "124",
            name: "jarvis",
            email: "jarvis@email.com",
            password: "bananas",
            joinDate: new Date()
        }
    ]
}

app.get('/', (req, res)=> {
    res.json('this is working');
})

app.post('/signin', (req, res)=> {
    if(req.body.email === db.users[0].email &&
        req.body.password === db.users[0].password) {
            res.json('logged in !!');
        } else {
            res.status(400).json('error occured!!');
        }
    // res.send('login page');
    
})

app.listen('3000', ()=> {
    console.log('server started on port 3000');
})