import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default mongoose.model('User', UserSchema);
