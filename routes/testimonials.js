const express = require('express');

const router = express.Router();

router.get('/testimonials',(req,res,nexr)=>{
    console.log('testimonials middleware');
    res.send("<div><h1>Testimonials</h1> <form method = 'POST'> <input type='text' name='comment' style='width:300px;height:100px'><button type='submit' style='display:block; margin-top:20px'>SEND</button></form></div>");
})


router.post('/testimonials',(req,res,next)=>{
    console.log('POST testimonials');
    console.log('request =>', req.body.comment);
    let _comment = req.body.comment;
    res.send(`<div><p style="display:block">${_comment}</p></div>`);

})
module.exports = router;