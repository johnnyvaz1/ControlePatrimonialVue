const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()
    .then('./api/validation.js')
    .then('./api')
    .then('./config')
    .into(app)

const port = 3000
app.listen(port, () => {
    console.log('Backend executando na porta ' + port)
})
