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

router.get('/get-non-verified-cases', function(req, res, next) {
  COVIDCases.find({verified: false},(err, result) => {
    if (err) {
      return res.status(500).send({success: false, body: error});
    }
    else {
      return res.send({success: true, body: result});
    }
  });
});

router.post('/update-verification-flag', function(req, res, next) {
  if(!req.body._id) {
    return res.status(500).send({success: false, body: 'Please Porvide Id Of Case'});
  }
  COVIDCases.findOneAndUpdate({_id: req.body._id},{$set: {verified: true}}, {new: true},(err, result) => {
    if (err) {
      return res.status(500).send({success: false, body: error});
    }
    else {
      return res.send({success: true, body: result});
    }
  });
});

module.exports = router;
