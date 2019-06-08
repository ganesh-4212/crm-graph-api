import mongoose, { Schema } from 'mongoose';

const Customer = new Schema({
  email: {
    type: String,
    required: false,
    unique: true,
    index: true
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  name: {
    type: String
  },
  address: {
    type: String
  },
  dateOfBirth: {
    type: Date
  },
  profilePic: {
    type: String
  }
});

export default mongoose.model('Customer', Customer);
