// models/OTP.js

const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, // OTP expires in 5 minutes
  },
});
otpSchema.index({ email: 1 });



const OTP = mongoose.model('OTPS', otpSchema);

module.exports = OTP;
