const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Menu = require('../models/Menu.js');

//get all
router.get('/', async (req, res) => {
  try {
      const menus = await Menu.find({});
      res.json(menus);
  } catch (err) {
      console.error(err);
      res.status(500).send('An error occurred');
  }
});

// get by id
router.get('/:id', async (req, res, next) => {
  try {
      const menu = await Menu.findById(req.params.id);
      res.json(menu);
  } catch (err) {
      return next(err);
  }
});

  
  // post data
  router.post('/', async (req, res, next) => {
    try {
      const post = await Menu.create(req.body);
      res.json(post);
    } catch (err) {
      return next(err);
    }
  });
  
  // update data
  router.put('/:id', async (req, res, next) => {
    try {
      const put = await Menu.findByIdAndUpdate(req.params.id, req.body, { Menu: true });
      res.json(put);
    } catch (err) {
      return next(err);
    }
  });
  
  // delete data
  router.delete('/:id', async (req, res, next) => {
    try {
      const del = await Menu.findByIdAndDelete(req.params.id);
      res.json(del);
    } catch (err) {
      return next(err);
    }
  });

module.exports = router;