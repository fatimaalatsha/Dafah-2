const router = require('express').Router();
let users = require('../database-mongo/users.models');


router.route('/').get((req, res) => {
  users.find()
res.json('hi from the user rout')
    // .then(user=> res.json(users))
    // .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
const username= req.body.username;
const password =req.body.password;
const newUser = new users ({username, password})

    .then(user=> res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//To solve the " throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn)),just added this line" f
module.exports = router;








//To solve the  throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn)),just added this line
//module.exports = router;