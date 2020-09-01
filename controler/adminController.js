const Courses = require('../model/course');
const data = require('../helper/data'); // з хелпера експорт
/*
let data = {
    title:'Perfect learning',
    Welcome:'Welcome',
    welcomeToEducation:'Loraem ipsum',
    applyToAdmission:'Lorem ipsum 2',
    research:'Lorem ipsum 3',
    footerText:'Fotter text',
    address:'Riven Riven',
    phone:'092586221',
    email:'abkcsd@fgdfg.com',
    date: new Date().getFullYear(),

};
*/
/*
exports.getCourses = (req,res,next)=>{
    Courses.fetchAllCourses()
    .then(([rows, fieldData]) => {
      //console.log(rows);
      res.render('admin/courses',{
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
      res.render('admin/courses',{
          data:data,
          courses:courses,
      });
    })
    .catch((err) => console.log(err));
}



exports.getCoursesDeleteID=(req,res,next)=>{
    const id = req.params.id;    
    Courses.destroy(
          {
            where: {
              id: id
            },
            force: true
          }
    ).then((courses)=>{           
        res.redirect('/admin/courses');
    })
    .catch((err) => console.log(err));
}

exports.AddCourseGet = (req,res,next) =>{
    res.render('admin/add-course',{
        data:data,
        //courses:rows,
    });
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


exports.AddCoursePost = (req,res,next) =>{
    //console.log(req.body);
    const title = req.body.title;
    const preview = req.body.preview;
    const course_program = req.body.course_program;
    const description = req.body.description;
    const image = req.body.image;
    const price = req.body.price;

    Courses.create({
        title: title,
        preview:preview,
        course_program: course_program,
        image: image,
        description: description,
        price: price,
    }).then(result => {
        console.log('add course result =>',result);
        console.log('course add');
        res.redirect('/courses');
    }).catch((err)=> console.log(err));
}