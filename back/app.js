const express = require('express');
const postRouter = require('./routes/post');

const app = express();

app.use('/post', postRouter);

app.get('/', (req, res) => {
    res.send('Welcome to Doodling API!');
});

app.listen(3065, () => {
    console.log('Server running..');
});