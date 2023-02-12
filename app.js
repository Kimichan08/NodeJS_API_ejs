const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app_route = require('./routes/app.route');
const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "./uploads")));

app_route(app);

app.listen(3000,()=>{
    console.log('listen to http://localhost:3000');
})