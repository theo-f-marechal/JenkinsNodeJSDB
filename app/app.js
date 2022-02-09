const express = require('express');
const app = express();
const host = 'localhost';
const port = 8081;


const MongoDBStore = require('connect-mongodb-session')(session);
        const store = new MongoDBStore({
            uri: MONGODB_URI,
            collection: 'sessions'
        });
        app.use(
            session({	
                secret: 'secret string',
                resave: false,
                saveUninitialized: false,
                store: store, /* store session data in mongodb */ 
                cookie: { /* can add cookie related info here */ }
            })
        );


app.get('/', function(req, res){
    if(!req.session.pageCountByCurrentUserOrAnyNameYouWant)
        req.session.pageCountByCurrentUserOrAnyNameYouWant = 0;
    req.session.pageCountByCurrentUserOrAnyNameYouWant++;
    res.send({
        pageCount: req.session.pageCountByCurrentUserOrAnyNameYouWant
    });
});


app.listen(port, () => {
});
