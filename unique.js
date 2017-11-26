'use strict';
const errors = require('mm-errors');

const Unique = function() {
  this.r = undefined;
}

Unique.prototype.__init = function(units) {
  this.r = units.require('db.rethinkdb');
};

Unique.prototype.ensure = function(table, id) {
  return this.r.table(table)
    .insert({ id })
    .run()
    .then(res => {
      if (res && res.errors && res.errors > 0) {
        const message = res.first_error;
        if (/Duplicate primary key/.test(message)) {
          throw errors.Duplicate();
        }

        const e = new Error(message);
        e.errors = res.errors;
        throw e;
      }

      return res;
    });
};

Unique.prototype.delete = function(table, id) {
  return this.r.table(table)
    .get(id)
    .delete()
    .run();
};

Unique.prototype.rename = function(table, oldId, newId) {
  return this
    .ensure(table, newId)
    .then(() => this.delete(table, oldId))
    .then(() => newId);
};

module.exports = Unique;
