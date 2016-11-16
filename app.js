const linebot = require('linebot');
const express = require('express');
const bot = linebot({
    channelId: 1488066467,
    channelSecret: '1956790f9c21c431ea2003816f8553d3',
    channelAccessToken: 'n5I5lS/u1d1eUjk/mPHrIpQasEuu/X1XFlu6fYrX3EDs93FkMC61uonk307YHO/YY2t8GFaBt7rDRWnE20wxYEroM0ylYOr679trEwjfPveU/GCcSXla/xDoXb1mNbXYyDcCJTBNTGXlK9u5jSfIHwdB04t89/1O/w1cDnyilFU='
});

bot.on('message', (event) => {
    // event.message.text 對方傳進來的訊息
    event.reply("apple").then((data) => {
        console.log('success');
    }).catch((error) => {
        console.log('error');
    });
});

const app = express();
const linebotParser = bot.parser();
app.post('/linewebhook', linebotParser);
app.listen(3000);