// const express = require ('express');


// const app = express();

// const PORT = 5000;

// const news = [
//     {
//         title: 'В кр прошли выборы',
//         content: 'аааауууууфффффф',
//         date: new Date(),
//     }
// ];



// app.get('/news',async (req, res) => {
//     try {

//         res.status(200).json({
//             message: 'Новости за последние 5 часов, бич',
//             news: news
//         })
//     } catch (e) {

//     }
// });

// const heroes = [
//    {
//        name: 'Spider man',
//        power: 'Pautina'
//    } ,
//    {
//        name: 'Hulk',
//        power: 'Качок'  
//    }
// ];

// app.get('/heroes',async (req, res) => {
//     try {

//         res.status(200).json({
//             message: 'это тип крутые герои',
//             news: heroes
//         })
//     } catch (e) {
//         console.log('опа, ошибочка', e)
//     }
// });


// app.listen(PORT, () => {
//     console.log('Backand запущен!!! на порту: ' + PORT);
// });










const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');

const { router } = require('./routes/api');

app.use(bodyParser.json());
app.use(router);

const PORT = process.env.PORT || 3333;


const db_url = 'mongodb+srv://elgispresley:elgisujyibr@cluster0.rbabf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

async function start() {
    try {
       await mongoose.connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
       });
       app.listen(PORT, () => {
        console.log(`Приложение запущено на ${PORT} порту`);
    });
    
    } catch (e) {
        console.log('Ошибка запуска приложения ', e.message);
        process.exit(1);
    }
}  
start();
