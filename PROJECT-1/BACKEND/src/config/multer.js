// config/multer.js  (ya already tumhara file hai toh update karo)
const multer = require("multer");

// Memory storage — file buffer mein rahega
const storage = multer.memoryStorage();

const uploadVideo = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB max
  fileFilter: (req, file, cb) => {
    const allowed = ["video/mp4", "video/webm", "video/quicktime"];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only mp4, webm, mov allowed"), false);
    }
  },
});


module.exports = uploadVideo;