import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  tgId: {
    type: String,
    required: true,
  },
  isDeveloper: {
    type: Boolean,
  },
});

export default mongoose.model("User", userSchema);
