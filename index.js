const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

//setting up engine and middlware
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res, next) => {
    try {
        res.status(200).render('home');
    } catch (error) {
        next(error); 
    }
});

// server 
app.listen(port, (req, res) => {
    console.log(`localhost:${port} Running`)
})