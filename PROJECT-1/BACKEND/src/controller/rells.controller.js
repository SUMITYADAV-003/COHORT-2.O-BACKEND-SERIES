const ReelModels = require("../models/rells.models.js");
const imagekit = require("../config/imagekit.js");


exports.uploadReel = async (req, res) => {
  try {
    const { caption, audioName } = req.body;

    if (!req.file) return res.status(400).json({message: "Video file is required"});

    const uploaded = await imagekit.upload({
      file: req.file.buffer,
      fileName: `reel_${Date.now}_${req.user.id}`,
      folder: "/CHORT2.O-REELS",
      useUniqueFileName: true,
    });

    const reel = await ReelModels.create({
      user: req.user.id,
      videoUrl: uploaded.url,
      fileId: uploaded.fileId,caption,
      audioName: audioName || "Original Audio",
    });

    await reel.populate("user", "username avatar");

    res.status(201).json({message: "Reel uploaded", reel});
    
  }
  catch (err) {
   res.status(500).json({message: err.message});
  }


};

exports.getAllReels = async(req,res) => {
  try {
    const page = parseInt(req.body.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1 ) * limit;

    const reels = await ReelModels.find()
    .populate("user", "username avatar isPrivate")
    .sort({createdAt: - 1})
    .skip(skip)
    .limit(limit);

    const total = await ReelModels.countDocuments();

    res.json({
      reels,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
       hasMore: skip + reels.length < total,

    });
  } catch(err){
    res.status(500).json({ message: err.message });
  }
   
}