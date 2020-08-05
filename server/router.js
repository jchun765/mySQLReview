const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/food')
  .get(controllers.get)
  .post(controllers.post)

module.exports = router;


//FILL OUT ROUTES