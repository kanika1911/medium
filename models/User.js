const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      default:
        'https://miro.medium.com/v2/resize:fill:200:134/1*9rRaimAUp5A2ABGnoR07AA.png',
    },
    blog: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
      },
    ],
  },
  { timeStamps: true },
)


module.exports.User = mongoose.model('User', userSchema)
