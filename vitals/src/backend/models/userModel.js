const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false }, // Track if the email is verified
  verificationToken: { type: String }, // Token for email verification
});

module.exports = mongoose.model('User', userSchema);