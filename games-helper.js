const db = require('./data/dbConfig');

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
};

function find() {
  return db('games');
}

function findById(id) {
  return db('games')
    .where({ id: Number(id) })
    .first();
}

function insert(user) {
  return db('games')
    .insert(game)
    .then(ids => ({ id: ids[0] }));
}

function update(id, user) {
  return db('games')
    .where('id', Number(id))
    .update(user);
}

function remove(id) {
  return db('games')
    .where('id', Number(id))
    .del();
}