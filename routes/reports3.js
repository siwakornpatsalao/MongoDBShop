const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Report3 = require('../models/Report3.js');

//get all
router.get('/', async (req, res) => {
    try {
      const Report3s = await Report3.find({});
      res.json(Report3s);
    } catch (err) {
      console.error(err);
      res.status(500).send('An error occurred');
    }
  });

// get by id
router.get('/:id', async (req, res, next) => {
    try {
      const get2 = await Report3.findById(req.params.id);
      res.json(get2);
    } catch (err) {
      return next(err);
    }
  });
  
  // post data
  router.post('/', async (req, res, next) => {
    try {
      const post = await Report3.create(req.body);
      res.json(post);
    } catch (err) {
      return next(err);
    }
  });
  
  // update data
  router.put('/:id', async (req, res, next) => {
    try {
      const put = await Report3.findByIdAndUpdate(req.params.id, req.body, { Report3: true });
      res.json(put);
    } catch (err) {
      return next(err);
    }
  });
  
  // delete data
  router.delete('/:id', async (req, res, next) => {
    try {
      const del = await Report3.findByIdAndDelete(req.params.id);
      res.json(del);
    } catch (err) {
      return next(err);
    }
  });

module.exports = router;