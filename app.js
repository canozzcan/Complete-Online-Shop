const path = require('path');

const express = require('express');

const authRoutes = require('./routes/auth.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// authRoutes middleware functions are evaluated for all incoming requests. 
app.use(authRoutes);


app.listen(3000);