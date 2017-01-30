'use strict';

const knex = require('../knex');

// *** Helper *** //

function classifieds() {
  return knex('classifieds').select('id', 'title', 'description', 'price', 'item_image');
}

// *** classifieds queries *** //

function getAll() {
  return classifieds();
}

function getSingle(classifiedID) {
  return classifieds().where('id', parseInt(classifiedID)).first();
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle
}
