const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/gameofthrones',(req,res,next) =>{
    res.send('winter is coming');
});

app.get('/api/gameofthrones',(req,res,next) =>{
    res.json({
        place : 'Winterfell',
        house : 'Stark',
        seal : 'Wolf',
        'last members' : ['Arya', 'Sansa', 'Jon Snow']
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})