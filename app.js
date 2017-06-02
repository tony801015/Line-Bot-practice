const linebot = require('linebot');
const express = require('express');
const bot = linebot({
    channelId: 1488066467,
    channelSecret: '1956790f9c21c431ea2003816f8553d3',
    channelAccessToken: '324c6qyRSxz9wDnLfk4vevKsWZK7Plj/+HB3WceI+EPm+oYph+0kYFRG/nNtH4GyY2t8GFaBt7rDRWnE20wxYEroM0ylYOr679trEwjfPvcp4jZRrtkDZbAsvAE24VlIRlCf7omaSDAoHLcla+luPAdB04t89/1O/w1cDnyilFU='
});

bot.on('message', (event) => {


    // event.message.text 對方傳進來的訊息
    event.reply(event.message.text).then((data) => {
        console.log('success');
    }).catch((error) => {
        console.log('error');
    });
});

const app = express();
const linebotParser = bot.parser();
app.post('/linewebhook', linebotParser);
app.listen(3000);