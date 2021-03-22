const { News } = require('../models/news')


exports.getNews = async (request, response) => {
    try {
        const allNews = await News.find();
        response.status(200).json(allNews);
    } catch (e) {
        response.status(500).json(e.message);
    }
};

exports.getOneNews = async (req, res) => {
    try {
        const news = await News.findByIdAndDelete(req.params.newsId);


        
      
        
        if (!news) {
            return res.status(404).json('Новость не найдена');
        }

        return res.status(200).json(news);
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Сервер прилег');
    }
};


exports.creatNews = async (req, res) => {
    try {
       

        const news = req.body;

        console.log(news)

        const createdNews = await News.create({
            title: news.title,
            content: news.content
        });
        
            res.status(201).json({
            message: 'Новость создана',
            news: createdNews
        });
    } catch (e) {
       res.status(500).json({
           message: e.message
       });
    }
};

exports.deleteNews = async (req, res) => {
    try {
       const news = await News.findByIdAndDelete(req.params.newsId);
       if (!news) {
           return res.status(404).json('Новость невозможно удалить, так как ее нет))')
       } 
    } catch (e) {
        console.error(e.message);
        res.status(500).json('Сервера усталЮ он прилег спать');
    }
};