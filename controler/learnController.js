const Courses = require('../model/course');
const data = require('../helper/data'); // з хелпера експорт
const Course = require('../model/course');
exports.getHome = (req,res,next)=>{
    res.render('index',{
        data:data,
    });    

}

exports.getAbout = (req,res,next)=>{
    res.render('about',{
        data:data
    });
}

exports.getContact = (req,res,next)=>{
    res.render('contact',{
        data:data
    });
}
/*
exports.getCourses = (req,res,next)=>{
    Courses.fetchAllCourses()
    .then(([rows, fieldData]) => {
      //console.log(rows);
      res.render('courses',{
          data:data,
          courses:rows,
      });
    })
    .catch((err) => console.log(err));
}
*/

exports.getCourses = (req,res,next)=>{
    Courses.findAll()
    .then((courses) => {
      res.render('courses',{
          data:data,
          courses:courses,
      });
    })
    .catch((err) => console.log(err));
}


exports.getCoursesId=(req,res,next)=>{
    const id = req.params.id;    
    Courses.findByPk(id)
   .then((courses)=>{      
        res.render('course_id',{
         data:data,
         courses: courses,
       })
   })
   .catch((err) => console.log(err));
   
}
