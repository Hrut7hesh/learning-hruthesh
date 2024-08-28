const express = require('express');
const router = express.Router();
const fileControllers = require('../controllers/filesMulter');

router.post('/images', fileControllers.postPhotos);
router.post('/documents', fileControllers.resumeUpload);
router.post('/videos', fileControllers.videoUpload);

router.get('/imagesupload', fileControllers.getPhotos);
router.get('/document', fileControllers.getUpload);
router.get('/video', fileControllers.getVideo);

module.exports = router;