const express = require('express');
const host = 'localhost';
const port = 8081;
const session = require('express-session');
const app = express();

// Session Setup
app.use (
    session ({

        // It holds the secret key for session
        secret: "I am girl",

        // Forces the session to be saved
        // back to the session store
        resave: true,
        
        
        // Forces a session that is "uninitialized"
        // to be saved to the store
        saveUninitialized: false,
        cookie: {}
    })
);
app.get('/', (req, res) => {
    res.send(`Hello from my node app, it is your first time here ! Welcome :)`);

});
app.get('/session', function(req, res, next) {

    if (req.session.views) {
        
    // Increment the number of views.
    req.session.views++

    // Print the views.
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