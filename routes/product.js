const express = require('express');
const router = express.Router();
const fs = require('fs');
var {items} =  require('./../data/data.json')

router.get('/', function(req,res,next){
    res.send('not yet complete')
    next();
})
router.get('/:id', function(req,res) {   
    var id = req.params.id;
    var {items} = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
    var item = items.find((item) =>{
        return Number(item.id) === Number(id);
    })
    res.render('product', {item})

});
module.exports = router;
