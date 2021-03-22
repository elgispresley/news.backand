const mongoose = require('mongoose');
const newsSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    creationDate: {
        type: String,
        default: new Date().toString()
    }
});

exports.News = mongoose.model('News', newsSchema);
