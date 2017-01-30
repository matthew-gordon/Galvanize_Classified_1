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

// *** POST create single classified *** //
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

// *** PUT update single classified by id *** //
router.put('/:id', (req, res, next) => {
  res.send(`hello from PUT route`);
});

module.exports = router;
