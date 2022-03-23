const express = require('express');
const path = require('path')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')
const viewspath = path.join(__dirname, '../templates/views')
const partialspath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs');
app.set('views', viewspath)
hbs.registerPartials(partialspath)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather app',
        name: 'saravanan'
    })
})
app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'search is missing'
        })
    }
    res.send({ products: [] })


})
app.get('/weather', (req, res) => {
    res.send('rainy')
})
app.listen(port, () => {
    console.log('port is running 3000')
})
// console.log('port is running 3000')