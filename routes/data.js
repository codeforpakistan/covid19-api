var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var COVIDCases = mongoose.model('COVIDCases');

router.post('/create', function(req, res, next) {
  var newCase = new COVIDCases(req.body);
  newCase.save((err, result) => {
    if (err) {
      return res.status(500).send({success: false, body: error});
    }
    else {
      return res.send({success: true, body: 'added'});
    }
  });
});

module.exports = router;
