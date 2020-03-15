var mongoose = require('mongoose');
var COVIDCasesSchema = new mongoose.Schema({
  timeStamp: { type : Date, default: Date.now },
  patientID: String,
  confirmationDate: Date,
  fullName: String,
  gender: String,
  DOB: Date,
  resident: String,
  residentProvince: String,
  admittedAtHospital: String,
  admittedAtProvince: String,
  infectionSource: String,
  currentStatus: String,
  verified: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('COVIDCases', COVIDCasesSchema);
