require('dotenv').config()
const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Holi uwun')
})

module.exports = {
    start: () => {
        app.listen(PORT, () => {
            console.log(`Escuchando en el puerto ${PORT}`)
        })
    }
}