const Discord = require('discord.js');
const bot = new Discord.Client();
bot.on('ready', () => {
    console.log("Pret");
});

bot.login('');
bot.on('message', message => {
    if (message.content === ("salope"))
        message.delete()
    });
