// setting packages
var express = require('express');
var app = express();
const hbs = require('hbs');
const fs = require('fs');

// setting port
const port = process.env.PORT || 3000;

//static files
app.use(express.static(__dirname + '/public'));

// setting hbs
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');


app.get('/',function(req,res){
    res.render('index.hbs',{
      portfolio:true
    });
});

app.get('/about',(req,res) => {
    res.render('about.hbs',{
      about:true
    });
});

app.get('/test',function(req,res){
    res.render('test.hbs',{
      __dirname
    });
});
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
