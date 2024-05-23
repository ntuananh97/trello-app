const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello Trello Api")
})

app.listen(5000, () => {
    console.log('Server run successfully!');
})