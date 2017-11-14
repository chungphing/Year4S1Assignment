const express = require('express');
const router = express.Router();

router.get('/' , function(req, res){
  res.render('post', {active: {post: true}});
});

module.exports = router;
