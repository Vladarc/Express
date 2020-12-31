const express = require('express');
const db  = require('./db/db');
const cardValuesRoutes = require('./controllers/cardValuesController');

const app = express();



app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api/v0', cardValuesRoutes);



app.listen( 3000, () =>{
    console.log('Server run');
});

db.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));