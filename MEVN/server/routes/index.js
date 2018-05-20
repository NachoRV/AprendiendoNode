var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/server', (req, res) => {
  res.send(
      [{
          title: "Hello World!!!!!",
          description: "Hi there! How are you? I´m"
      }]
  )
});

module.exports = router;
