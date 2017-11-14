const express = require('express');
const router = express.Router();

router.get('/' , function(req, res){
  res.render('all', {active: {about: true}});
});

module.exports = router;
