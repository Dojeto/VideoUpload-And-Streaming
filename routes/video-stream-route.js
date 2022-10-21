var express = require('express');
var router = express.Router();
var videoStreamController = require('../controllers/video-stream-controller');

router.get('/:file_name/play', videoStreamController.streamVideo)

module.exports = router;
