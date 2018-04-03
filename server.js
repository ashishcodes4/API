const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const db = {
    users: [
        {
            id: 123,
            name: "ashish",
            email: "ashish@email.com",
            password: "cookies",
            entries: 0,
            joined: new Date()
        },
        {
            id: 124,
            name: "jarvis",
            email: "jarvis@email.com",
            password: "bananas",
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res)=> {
    res.json('this is working');
})

app.post('/register', (req, res)=> {
    const {name,email,password} = req.body;
    db.users.push({
        id: 125,
        name: name,
        email: email,
        pass: password,
        entries: 0,
        joined: new Date()
    })
    res.json(db.users[db.users.length-1]);
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