const router = require('express').Router();
let item = require('../database-mongo/item');

router.route('/').get((req, res) => {
  item.find()
    .then(item=> res.json(item))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.name;
  const description = req.body.description;
  const image = req.body.img;



  newitem.save()
  .then(() => res.json('item added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
//To solve the  throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn)),just added this line
module.exports = router;