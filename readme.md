# Matter In Motion. Rethinkdb unique index helper extension

[![NPM Version](https://img.shields.io/npm/v/mm-rethinkdb-unique.svg?style=flat-square)](https://www.npmjs.com/package/mm-rethinkdb-unique)
[![NPM Downloads](https://img.shields.io/npm/dt/mm-rethinkdb-unique.svg?style=flat-square)](https://www.npmjs.com/package/mm-rethinkdb-unique)

[Rethinkdb](https://www.rethinkdb.com) unique index helper extension for [matter in motion](https://github.com/matter-in-motion/mm) framework

As rethinkdb doesn't have unique second indexes support this extension provides method to make that possible

## Usage

[Extensions installation instructions](https://github.com/matter-in-motion/mm/blob/master/docs/extensions.md)

This extension adds a `db.rethinkdb.unquie` unit.

## Dependencies

* __[rethinkdb](https://github.com/matter-in-motion/mm-rethinkdb)__

## Methods

* __table__ — table name, that will be used as index
* __id__ — id, is a string or number that should be unique

All methods return a Promise. If `id` is not unique all methods throw a `Duplicate entity` error with code `4500`.

### ensure(table, id)

Ensures that id is unique.

### delete(table, id)

Deletes `id` from the index.

### rename(table, id, newId)

Renames `id` to `newId`.

License: MIT.
