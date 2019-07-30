let express = require('express');
let router = express.Router();

respo = {
  message: "index"
};

router.get('/', function(req, res, next) {
  res.send(respo);
});

module.exports = router;
