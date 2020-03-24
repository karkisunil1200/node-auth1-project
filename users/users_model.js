const db = require('../data/dbConfig');

module.exports = {
  find,
  add,
  findBy
};

function find() {
  return db.select('id', 'username', 'password').from('users');
}

function add(user) {
  return db('users').insert(user);
}

function findBy(filter) {
  console.log(filter);
  return db
    .select('*')
    .from('users')
    .where(filter);
}
