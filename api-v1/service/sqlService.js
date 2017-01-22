'use strict';
const config = require('config');

// Conect to DB
var mysql = require('knex')({
  dialect: 'mysql',
  connection: config.get('db')
});

// Create CRUD operations
const sqlService = {
  // SELECT
  list() {
    return mysql.select().table('message').then((rows) => {
      console.log(rows);
      return rows;
    })
  },
  //INSERT
  insert(title, body) {
    return mysql.insert(title, body).into('message').then((row) => {
      
      return {
        inserted: true,
        row: row
      };
    })
  }

};

module.exports = sqlService;