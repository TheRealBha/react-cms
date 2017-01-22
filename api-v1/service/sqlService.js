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
      return rows;
    })
  },
  // INSERT
  insert(title, body) {
    return mysql.insert({
      title,
      body
    }).into('message').then((row) => {
      return {
        title: title,
        body: body,
        inserted: true,
        row: row
      };
    })
  },
  // UPDATE
  update(id, title, body) {
    return mysql('message').where('id', id).update({
      title,
      body
    }).then((row) => {
      return {
        id: id,
        title: title,
        body: body,
        updated: true,
        row: row
      };
    })
  },
  // DELETE
  delete(id) {
    return mysql('message').where('id', id).del().then((row) => {
      return {
        id: id,
        deleted: true,
        row: row
      };
    })
  }
};

module.exports = sqlService;