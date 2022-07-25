import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import hbs from 'hbs'
import path from 'path'
import { fileURLToPath } from 'url'
const app = express()
const port = process.env.PORT

// Dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// serve static content
app.use(express.static('public', { extensions: ['html'] }))

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Jhoel Soncco',
        title: 'Curso Node',
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Jhoel Soncco',
        title: 'Curso Node',
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Jhoel Soncco',
        title: 'Curso Node',
    })
})

app.get('*', (req, res) => {
    res.render('404')
})
console.log('ejecutando en el puerto ', port)
app.listen(port)
