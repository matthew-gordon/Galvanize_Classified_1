'use strict';

const knex = require('../knex');

// *** Helper *** //

function classifieds() {
  return knex('classifieds');
}

// *** classifieds queries *** //

function getAll() {
  return classifieds().select('id', 'title', 'description', 'price', 'item_image');
}

module.exports = {
  getAll: getAll
}
