const express = require('express');
const router = express.Router();

router.get('/' , function(req, res){
  res.render('lists', {active: {lists: true}});
});

module.exports = router;
