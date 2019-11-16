const express = require('express')
const path = require('path')


const port = process.env.PORT || 8080
const app = express()

app.use(express.static('dist'));

app.listen(port, '0.0.0.0', () => console.info(`Listening at http://localhost:${port}`));