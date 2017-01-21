'use strict';
const config = require('config');
var mysql = require('knex')({
  dialect: 'mysql',
  connection: config.get('db')
});
 
const sqlService = {
  list() {
    return mysql.select().table('message').then((rows)=>{
      console.log(rows);
      return rows;
    })
  }
};
 
module.exports = sqlService;