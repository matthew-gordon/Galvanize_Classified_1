
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
  });
});

// *** GET single classified by id *** //
router.get('/:id', (req, res, next) => {
  queries.getSingle(req.params.id)
  .then((classified) => {
    res.status(200).json(classified);
  })
  .catch((error) => {
    next(error);
  });
});

// *** POST all classifieds *** //
router.post('/', (req, res, next) => {
  queries.add(req.body)
  .then((classifiedID) => {
    return queries.getSingle(classifiedID);
  })
  .then((classified) => {
    res.status(200).json(classified);
  })
  .catch((error) => {
    next(error);
  });
});

module.exports = router;
