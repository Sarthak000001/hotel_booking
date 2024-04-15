const imageDownloader = require("image-downloader");
const fs = require('fs');

exports.upload_link = async (req, res) => {
  const { link } = req.body;
  const newName = 'photo' + Date.now() + '.jpg';
  const destPath = 'C:/Users/sarthak/Desktop/wtl project/VenueVista/api/uploads/' + newName;

  try {
    await imageDownloader.image({
      url: link,
      dest: destPath,
    });
    res.json(newName);
  } catch (error) {
    console.error('Error downloading image:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.upload_image = async (req, res) => {
  const uploadedFiles = [];

  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newName = 'image' + Date.now() + '.' + ext;
    const newPath = 'C:/Users/sarthak/Desktop/wtl project/VenueVista/api/uploads/' + newName;

    try {
      fs.renameSync(path, newPath);
      uploadedFiles.push(newName);
    } catch (error) {
      console.error('Error renaming file:', error);
    }
  }

  res.json(uploadedFiles);
};
