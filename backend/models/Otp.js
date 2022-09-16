import mongoose from 'mongoose';
// import conn from '../config/db';
// import bcrypt from 'bcryptjs'
// const conn = require('../config/db')

const otpSchema = new mongoose.Schema(
  {
    
    email: {
      type: String,
      required: true,
    //   unique: true,
    },
    expiresIn: {
        type: Number,
    },
    code: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)
// let otp = mongoose.model('otp', otpSchema, 'otp')
const otp = mongoose.model('otp', otpSchema, 'otp')

export default otp