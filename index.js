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

const { router } = require('./routes/api');

app.use(bodyParser.json());
app.use(router);

const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Приложение запущено на ${PORT} порту`);
});