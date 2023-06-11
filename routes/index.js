var express = require('express');
var router = express.Router();

 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

/* GET home page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Express' });
});

/* GET home page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Express' });
});

/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;


