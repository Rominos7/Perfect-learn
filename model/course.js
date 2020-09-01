//const db =require('../helper/database');
/*
module.exports = class Course{
    static fetchAllCourses(){
        return db.execute('SELECT * FROM course');
    }
    static fetchCoureById(id){
        console.log("ID -->>"+id);
        return db.execute(`SELECT * FROM course WHERE id=${id}`);
    }

    static fetchCoureDeleteID(id){
        console.log("ID -->>"+id);
        return db.execute(`DELETE FROM course WHERE id=${id}`);

    }
};
*/

const Sequalize = require('sequelize');
const sequelize = require('../helper/database');

const Course  = sequelize.define('course',{
     id:{
         type:Sequalize.INTEGER,
         autoIncrement:true,
         allowNull:false,
         primaryKey: true,
     },
     title:{
         type:Sequalize.STRING,
         allowNull:false,
        },
     preview:{
        type:Sequalize.STRING,
        allowNull:false,
       },
     course_program:{
        type:Sequalize.STRING,
        allowNull:false,
       },
     image:{
         type:Sequalize.STRING,
         allowNull : false,
        },
     description:{
        type:Sequalize.TEXT,
        allowNull:false,
       },
    price:{
        type:Sequalize.DOUBLE,
        aloowNull: false,
    },

});

module.exports = Course;