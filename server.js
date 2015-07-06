var express = require('express'),
		hbs = require('./config/handlebars');

var app = express();

app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.engine);
