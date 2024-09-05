var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const menus = require('./routes/menus');
const Menu = require('./models/Menu.js');
const categories = require('./routes/categories');
const Category = require('./models/Category.js');
const addons = require('./routes/addons');
const Addon = require('./models/Addon.js');
const optiongroups = require('./routes/optiongroups');
const OptionGroup = require('./models/OptionGroup.js');
const promotions = require('./routes/promotions');
const Promotion = require('./models/Promotion.js');
const shops = require('./routes/shops');
const Shop = require('./models/Shop.js');
const report1s = require('./routes/reports1');
const Report1 = require('./models/Report1.js');
const report2s = require('./routes/reports2');
const Report2 = require('./models/Report2.js');
const report3s = require('./routes/reports3');
const Report3 = require('./models/Report3.js');
const orders = require('./routes/orders');
const Order = require('./models/Order.js');
const orderPaids = require('./routes/orderPaids');
const OrderPaid = require('./models/OrderPaid.js');
const carts = require('./routes/carts');
const Cart = require('./models/Cart.js');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://pure:1234@cluster0.gyqo6y8.mongodb.net/?retryWrites=true&w=majority')
        .then(() => console.log('connection successfully!'))
        .catch((err) => console.error(err)) 



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors());

app.use(express.json({limit: '50mb'}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/menus', menus);
app.use('/category', categories);
app.use('/addons', addons);
app.use('/optiongroups', optiongroups);
app.use('/promotions', promotions);
app.use('/shops', shops);
app.use('/report1', report1s);
app.use('/report2', report2s);
app.use('/report3', report3s);
app.use('/orders', orders);
app.use('/orderPaids', orderPaids);
app.use('/carts', carts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/menus', async (req, res) => {
  try {
    const Menus = await Menu.find({});
    res.json(Menus);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

app.get('/category', async (req, res) => {
  try {
    const Categories = await Category.find({});
    res.json(Categories);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

app.get('/addons', async (req, res) => {
  try {
    const Addons = await Addon.find({});
    res.json(Addons);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

app.get('/optiongroups', async (req, res) => {
  try {
    const OptionGroups = await OptionGroup.find({});
    res.json(OptionGroups);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

app.get('/promotions', async (req, res) => {
  try {
    const Promotions = await Promotion.find({});
    res.json(Promotions);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

app.get('/shops', async (req, res) => {
  try {
    const Shops = await Shop.find({});
    res.json(Shops);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

app.get('/report1', async (req, res) => {
  try {
    const Report1s = await Report1.find({});
    res.json(Report1s);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

app.get('/report2', async (req, res) => {
  try {
    const Report2s = await Report2.find({});
    res.json(Report2s);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

app.get('/report3', async (req, res) => {
  try {
    const Report3s = await Report3.find({});
    res.json(Report3s);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

app.get('/orders', async (req, res) => {
  try {
    const Orders = await Order.find({});
    res.json(Orders);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

app.get('/orderPaids', async (req, res) => {
  try {
    const OrderPaids = await OrderPaid.find({});
    res.json(OrderPaids);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});

app.get('/carts', async (req, res) => {
  try {
    const Carts = await Cart.find({});
    res.json(Carts);
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred');
  }
});



module.exports = app;
