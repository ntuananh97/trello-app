const express = require('express');
const cors = require('cors');
const MOCK_DATA = require('./src/mockData/mock-data');

const app = express();

app.use(cors())

// config body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Hello Trello Api")
})

app.get('/api/v1/mock-data', (req, res) => {
    res.status(200).json({
        data: MOCK_DATA
    })
})

app.listen(5000, () => {
    console.log('Server run successfully!');
})