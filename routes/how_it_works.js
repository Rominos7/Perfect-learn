const express = require('express');

const router = express.Router();


router.get('/how_it_works',(req,res,next)=>{
    console.log('how it works middleware');
    res.send('<h1>How it works</h1>');
})

module.exports = router;