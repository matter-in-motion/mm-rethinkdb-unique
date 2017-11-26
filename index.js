'use strict';
const Unique = require('./unique');

module.exports = () => ({
  db: { rethinkdb: { unique: new Unique() } }
});
