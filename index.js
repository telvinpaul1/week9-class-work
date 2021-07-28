const express = require('express')
const app = express();
const port = 8000;
const userRoute = require('./route/userRoute')
const db = require ("./config/db")
app.use(express.json());

db();

//Api getting a response
app.get('/', (req, res) => {
  res.send('Welcome to my API!')
 
});
app.use('/api/user', userRoute);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});