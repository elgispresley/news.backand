const express = require('express');
const router = express.Router();

const { getNews, creatNews, getOneNews } = require('../controllers/news');

router.get('/news', getNews);
router.get('/news/:newsId', getOneNews); //params id => :newsId
router.post('/create-news', creatNews);

exports.router = router;