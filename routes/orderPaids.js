const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const OrderPaid = require('../models/OrderPaid.js');

//get all
router.get('/', async (req, res) => {
    try {
      const Report3s = await OrderPaid.find({});
      res.json(Report3s);
    } catch (err) {
      console.error(err);
      res.status(500).send('An error occurred');
    }
  });

// get by id
router.get('/:id', async (req, res, next) => {
    try {
      const get2 = await OrderPaid.findById(req.params.id);
      res.json(get2);
    } catch (err) {
      return next(err);
    }
  });
  
  // post data
  router.post('/', async (req, res, next) => {
    try {
      const post = await OrderPaid.create(req.body);
      res.json(post);
    } catch (err) {
      return next(err);
    }
  });
  
  // update data
  router.put('/:id', async (req, res, next) => {
    try {
      const put = await OrderPaid.findByIdAndUpdate(req.params.id, req.body, { OrderPaid: true });
      res.json(put);
    } catch (err) {
      return next(err);
    }
  });
  
  // delete data
  router.delete('/:id', async (req, res, next) => {
    try {
      const del = await OrderPaid.findByIdAndDelete(req.params.id);
      res.json(del);
    } catch (err) {
      return next(err);
    }
  });

module.exports = router;