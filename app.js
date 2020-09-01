const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//include sequlize
const sequalize = require('./helper/database');

const PORT = 8000;
const app = express();
//Controlers
const errorController = require('./controler/errorController');
//const adminController = require('./controler/adminController');


// Databased
const db = require('./helper/database');
/*
const homeRoute = require('./routes/home');
const contactRoute = require('./routes/contact');
const aboutRoute = require('./routes/about');
const courseRoute = require('./routes/courses');

const howItWorksRoute = require('./routes/how_it_works');
const testimonialsRoute = require('./routes/testimonials');
*/
//Midlleware

//app.set('view engine','pug');
app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'static')));
app.use('/courses', express.static(path.join(__dirname, 'static')));
app.use('/admin/courses', express.static(path.join(__dirname, 'static')));
app.use('/admin/add-course', express.static(path.join(__dirname, 'static')));
//RoutesMW
/*
app.use(homeRoute);
app.use(contactRoute);
app.use(aboutRoute);
app.use(howItWorksRoute);
app.use(testimonialsRoute);
app.use(courseRoute);
*/
const learnRoutes = require('./routes/learn');
const adminRoutes = require('./routes/admin');
const sequelize = require('./helper/database');
app.use(learnRoutes);
app.use('/admin',adminRoutes);

app.use(errorController.get404);
//app.use(adminController);

sequalize.sync().then((res) =>{
     //console.log('Sync result',res);
     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err)=> console.log(err));
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
