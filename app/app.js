// Imports
const express = require('express')
const app = express()
const port = 3000

//Statci Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))


// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    //res.sendFile(__dirname + '/views/index.html')
    //res.send("Hello")
    res.render('index', { text: 'This is EJS.'})
})

app.get('/about', (req, res) => {
    res.render('about', { text: 'About Page.'})
})




// Listen on port 
app.listen(port, () => console.log(`Listening on Port ${port}`))