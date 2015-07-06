var express = require('express'),
		hbs = require('./config/handlebars'),
		root = __dirname + '/dist';

var app = express();

app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.engine);
app.use(express.static(root));

app.listen(3000);