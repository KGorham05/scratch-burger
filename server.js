const express = require("express");
const app = express();
const exphbs  = require('express-handlebars');

const PORT = process.env.PORT || 8080;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const burgerController = require("./controllers/burgersController.js");
app.use(burgerController);


app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`))