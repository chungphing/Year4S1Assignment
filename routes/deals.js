const express = require('express');
const router = express.Router();
var {items} =  require('./../data/data.json')

router.get('/' , function(req, res){
  res.render('deals', {items,active: {deals: true},catactive: {deals: true}});
});

module.exports = router;
