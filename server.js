const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const db = {
    users: [
        {
            id: '123',
            name: "ashish",
            email: "ashish@email.com",
            password: "cookies",
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: "jarvis",
            email: "jarvis@email.com",
            password: "bananas",
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res)=> {
    res.json(db.users);
})

app.get('/profile/:id', (req, res)=> {
    const { id } = req.params;
    let found = false;
    db.users.forEach(user => {
     const { id } = req.params
     if(user.id === id) {
         found = true;
         return res.json(user);
     }
     if(!found) {
         res.status(404).json('oh no, no such user!!!');
     }
     });
     console.log(typeof(db.users[1].id));
     console.log(typeof(id));
});

app.put('/image', (req, res)=> {
    const { id } = req.body;
    let found = false;
    db.users.forEach(user => {
        if(user.id === id) {
            found =true;
            user.entries++;
            return res.send(user);
        }
        if(!found){
            res.status(404).json('no such user found');
        }
    })
})

app.post('/register', (req, res)=> {
    const {name,email,password} = req.body;
    db.users.push({
        id: '125',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    })
    res.json(db.users[db.users.length-1]);
})

app.post('/signin', (req, res)=> {
    if(req.body.email === db.users[1].email &&
        req.body.password === db.users[1].password) {
            res.json(db.users[0]);
        } else {
            res.status(400).json('error occured!!');
        }
    // res.send('login page');
    
})

app.listen('3001', ()=> {
    console.log('server started on port 3001');
})