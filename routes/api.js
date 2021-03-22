const express = require('express');
const router = express.Router();


const { getNews, creatNews, getOneNews, deleteNews } = require('../controllers/news');

router.get('/news', getNews);
router.get('/news/:newsId', getOneNews); //params id => :newsId
router.post('/create-news', creatNews);
//удаление одной новости
router.delete('/delete-news/:newsId', deleteNews);
exports.router = router;