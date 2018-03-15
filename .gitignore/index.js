const Discord = require('discord.js')
const bot = new Discord.Client();

var prefix =  ("*")

bot.on('ready', function()) {
	bot.user.setFame("Command: *help");
	console.log("Connected");
});

bot.login("process.env.TOKEN");
