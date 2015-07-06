var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
	res.render('app/index');
});

module.exports = router;