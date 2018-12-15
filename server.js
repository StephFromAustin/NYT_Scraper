// DEPENDENCIES 
const express = require('express');
const mongoose = require ('mongoose');

// EXPRESS APP 
const db = require ('./models')
const PORT = process.env.PORT || 8080;
const app = express();

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database 
let MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

// SET UP HANDLEBARS 
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// STATIC DIRECTORY 
app.use(express.static('public'));

// IMPORT ROUTER 
const htmlRoutes = require('./controllers/htmlController.js');
const scraper = require('./constrollers/scrapers.js')
app.use(htmlRoutes);
app.use(scraper);

// LISTEN FUNCTION 
app.listen(PORT, function (){
    console.log('Server listening on: http://localhost:' + PORT)
})