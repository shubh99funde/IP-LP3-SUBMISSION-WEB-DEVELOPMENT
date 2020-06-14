const express = require('express');
const router = express.Router();
var dt = require('./mydate');

const Dates = require('../models/dates');

//retreiving data
router.get('/dates',(req,res,next)=>{
    Dates.find(function(err,dates){
        res.json(dates);
        //res.send(dt.myDateTime());
    })
});

router.post('/date',(req,res,next)=>{
    let newDate = new Dates({
        date: dt.myDateTime()
    });
    
    newDate.save((err, date)=>{
        if(err)
        {
            res.json({msg: 'Failed to add date'});
        }
        else{
            res.json({msg: 'Date added successfully'});
        }
    })
});



router.delete('/dates/:id',(req,res,next)=>{
    Dates.remove({_id: req.params.id}, function(err, result){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
module.exports = router;
