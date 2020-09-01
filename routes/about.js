const express = require('express');
//const { Router } = require('express');
const path = require('path');
const rootDir = require('../helper/helper');

const router = express.Router();

router.get('/about',(req,res,next)=>{
    //console.log('about middleware');
    //res.send('<h1>About page</h1>');
    //res.sendFile(path.join(rootDir,'views/views','about_1.html'));
    //res.render('about_1.pug');
    let data = {
        title:'About US!',
        capText:'Here you can read about us',
        Welcome:'We are awesome!',
        footerText:'Fotter text',
        address:'Riven Riven',
        phone:'092586221',
        email:'abkcsd@fgdfg.com',
        date: new Date().getFullYear(),

    };


    res.render('about.ejs',data);
});

module.exports = router;