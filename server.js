const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/home', (req, res) => {
    res.render('\\startbootstrap-agency\\dist\\index.html')
})

app.get('/', (req, res) => {
    res.render('home')
    //res.send('Hello World!')
})

app.get('/contact', (req, res) => {
    res.render('contact')
    //res.send('Contact')
})
  

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})