const express = require('express');
const host = 'localhost';
const port = 8081;
const session = require('express-session');
const app = express();


app.use (
    session ({
        secret: "seccret",
        resave: true,
        saveUninitialized: false,
        cookie: {}
    })
);

app.get('/', function(req, res, next) {

    if (req.session.views) {
    req.session.views++
    
    res.write('<p> No. of views: '
        + req.session.views + '</p>')
    res.end()
    } else {
    req.session.views = 1
	res.write('<p> No. of views: 1 </p>')
	res.end()
    }
})

app.listen(port, () => {
});