import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  developer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  tools: {
    type: [String],
    required: true,
  },
  repo: {
    type: String,
  },
  url: {
    type: String,
  },
});

export default mongoose.model("Project", projectSchema);
