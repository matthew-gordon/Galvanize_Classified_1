
'use strict';

const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

// *** GET all classifieds *** //
router.get('/', (req, res, next) => {
  queries.getAll()
  .then((classifieds) => {
    res.status(200).json(classifieds);
  })
  .catch((error) => {
    next(error);
  })
});

module.exports = router;
