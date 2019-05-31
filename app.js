const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const shortUrl = require('./models/shortUrl');
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname+'/public'));
//connect to the Database
mongoose.connect(process.env.MONGODB_URI ||'mongodc://localhost/shortUrls' );


//Creates database entry
app.get('/new/:urlToShortner(*)',(req,res,next)=>{
    var { urlToShortner } = req.params;

    return res.json({'urlToShortner':urlToShortner});
});

app.listen(3000,()=>{
    console.log('YEH Hai');
});