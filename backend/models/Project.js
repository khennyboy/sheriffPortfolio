import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    stack: {
      type: [String],
      default: [],
    },
    imageUrl: {
      type: String, 
      default: "",
    },
    liveUrl: {
      type: String,
      default: "",
    },
    codeUrl: {
      type: String,
      default: "",
    },
    featured: {
      type: Boolean,
      default: false, 
    },
    order: {
      type: Number,
      default: 0, // lower numbers show first; lets you reorder without renaming
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
