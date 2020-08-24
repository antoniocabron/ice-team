const Discord = require('discord.js');
const bot = new Discord.client();
const cfg = require('./index.jason');
const prefix = ('/');

bot.on('ready', function(){
    console.log('Je suis prêt a être utilisé.')

});

bot.login(cfg.token);