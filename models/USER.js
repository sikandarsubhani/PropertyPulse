// models/USER.js
import { schema, models, model, Schema } from 'mongoose'
import { unique } from 'next/dist/build/utils'

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exist'],
    required: [true, 'Email is required']
  },
  username: {
    type: String,
    // unique: [true, 'Username already exist'],
    required: [true, 'Username is required']
  },
  image: {
    type: String,
  },
  bookmarks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Property'
    }
  ],

}, {
  timestamps: true
})

const User = model.User || model('User', UserSchema)

export default User;