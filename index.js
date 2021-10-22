const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/', (req , res) => {
    res.send('Hello I am learning node and I am very excited to learn node!!!');
});

const users = [
    {id:0, name: 'Shabana', email: 'Shabana@gmail.com' , phone: '01788888888'},
    {id:1, name: 'Shabnoor', email: 'Shabana@gmail.com' , phone: '01788888888'},
    {id:2, name: 'Shrabonti', email: 'Shabana@gmail.com' , phone: '01788888888'},
    {id:3, name: 'Shuchorita', email: 'Shabana@gmail.com' , phone: '01788888888'},
    {id:4, name: 'Shushmita', email: 'Shabana@gmail.com' , phone: '01788888888'}
]
app.get('/users', (req , res) => {
    const search =  req.query.search;

    //Use query parameter
    if(search){

        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);

    }
    else{
        res.send(users);

    }
    
});
 //app method
app.post('/users', (req , res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post' , req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);

})
app.get('/users/:id', (req , res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
} )

app.get('/fruits' , (req , res) => {
    res.send(['mango','oranges','banana','apple']);
})

app.get('/fruits/mangoes/fazli', (req , res) =>{

    res.send('Yummy yummy tok marka fazli');
} )
app.listen(port , () => {
    console.log('Listening to port', port );
})