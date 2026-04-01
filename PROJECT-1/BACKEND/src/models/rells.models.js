const mongoose = require("mongoose");

const reelSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
  },
  caption: {
    type: String,
    maxlength: 2200,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
      text: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  views: {
    type: Number,
    default: 0,
  },
  audioName: {
    type: String,
    default: "Original Audio",
  },
  fileId: {
    type: String, 
  }



}, { timestamps: true });


const ReelModels = mongoose.model("reels", reelSchema);

module.exports = ReelModels;