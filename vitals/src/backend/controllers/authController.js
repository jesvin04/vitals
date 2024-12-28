const User = require('../models/userModel');
const crypto = require('crypto'); // For generating random tokens
const nodemailer = require('nodemailer'); // For sending emails
const bcrypt = require('bcrypt');

// User Signup
exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email is already registered
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    const saltRounds = 10; // Number of hashing rounds (adjustable for more security)
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Generate a verification token
    const verificationToken = crypto.randomBytes(32).toString('hex');

    // Create a new user with 'isVerified' set to false
    const newUser = new User({
      email,
      hashedPassword , // Make sure to hash the password in a real app
      verificationToken,
    });

    await newUser.save();

    // Send verification email
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Or another email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const verificationUrl = `http://localhost:3000/verify-email?token=${verificationToken}`;
    await transporter.sendMail({
      to: email,
      subject: 'Verify your email',
      html: `<p>Please verify your email by clicking the link below:</p>
             <a href="${verificationUrl}">Verify Email</a>`,
    });

    res.status(200).json({ message: 'Signup successful! Please check your email to verify your account.' });
  } catch (error) {
    res.status(500).json({ message: 'Error during signup', error });
  }
};

// Email Verification
exports.verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;

    // Find user with the matching token
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    // Activate the user's account
    user.isVerified = true;
    user.verificationToken = undefined; // Clear the token
    await user.save();

    res.status(200).json({ message: 'Email verified successfully. You can now log in.' });
  } catch (error) {
    res.status(500).json({ message: 'Error during email verification', error });
  }
};
