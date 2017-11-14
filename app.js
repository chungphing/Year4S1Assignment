const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.disable('x-powered-by');

//create a defualtLayout in ./views/layout/main.handlebars
const handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

//data
var {items} =  require('./data/data.json')

//routes
const about = require('./routes/about')
const contact = require('./routes/contact')
const deals = require('./routes/deals')
const all = require('./routes/all')
const post = require('./routes/post')
const lists = require('./routes/lists');
const product = require('./routes/product')
app.get('/', (req,res)=> {
  res.render('index', {items,active: {home: true}, catactive: {featured: true}})
 })
app.use('/about', about)
app.use('/contact', contact)
app.use('/deals', deals)
app.use('/all', all)
app.use('/post', post)
app.use('/product', product)
//app.use('/product/:id', product)

// app.get('/product/:id', function(request, response, next) {
//   var id = request.params.id;
//   response.render('product', {id})
//   next();
// }); 

app.use('/lists', lists)


app.use(function(req, res){
  console.log("Error 404");
  res.type('text/html');
  res.status(404);
  res.render('404');
});
app.use(function(err, req, res, next){
  res.type('text/html');
  res.status(500);
  res.render('500');
  console.log("Error 500");

});


app.listen(app.get('port'), () => {
  console.log("listen on port", app.get('port'));
})


