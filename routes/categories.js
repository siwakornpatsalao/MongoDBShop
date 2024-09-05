const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Category = require('../models/Category.js');

//get all
router.get('/', async (req, res) => {
    try {
      const Categories = await Category.find({});
      res.json(Categories);
    } catch (err) {
      console.error(err);
      res.status(500).send('An error occurred');
    }
  });

// get by id
router.get('/:id', async (req, res, next) => {
    try {
      const get2 = await Category.findById(req.params.id);
      res.json(get2);
    } catch (err) {
      return next(err);
    }
  });
  
  // post data
  router.post('/', async (req, res, next) => {
    try {
      const post = await Category.create(req.body);
      res.json(post);
    } catch (err) {
      return next(err);
    }
  });
  
  // update data
  router.put('/:id', async (req, res, next) => {
    try {
      const put = await Category.findByIdAndUpdate(req.params.id, req.body, { Category: true });
      res.json(put);
    } catch (err) {
      return next(err);
    }
  });

  // Delete multiple categories by names
  router.delete('/delete-categories', async (req, res, next) => {
    const { categoryNames } = req.body;
    console.log('Received request to delete categories:', categoryNames);
  
    try {
      await Category.deleteMany({ name: { $in: categoryNames } }, { isDeleted: true });
      res.json({ message: 'Categories deleted successfully' }); // Respond with a success message
    } catch (err) {
      console.log(err);
      return next(err);
    }
  });
  
  // delete data
 /*  router.delete('/:id', async (req, res, next) => {
    try {
      const del = await Category.findByIdAndDelete(req.params.id);
      res.json(del);
    } catch (err) {
      return next(err);
    }
  }); */


module.exports = router;