const path = require('path');

const express = require('express');

const db = require('./data/database');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

// authRoutes middleware functions are evaluated for all incoming requests. 
app.use(authRoutes);


/* "then()" to execute code if that promise succeeded or a
   "catch()" if that promise failed  */
db.connectToDatabase()
    .then(function () {
        app.listen(3000);
    })
    .catch(function (error) {
        console.log('Failed to connect to a database');
        console.log(error);
    });
