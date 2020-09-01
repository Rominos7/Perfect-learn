const mysql = require('mysql2');
/*
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'e-lern',
    password: '',
});

module.exports = pool.promise();
*/

const Sequelize = require("sequelize");

const sequelize = new Sequelize("e-lern", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
