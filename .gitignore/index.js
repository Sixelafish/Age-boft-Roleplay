const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix =  ("*")

bot.on('ready', function() {
	bot.user.setGame("Command: *help");
	console.log("Connectedç");
});

bot.login(process.env.TOKEN");

bot.on('message', message => {
	if (message.content === prefix + "help"){
		message.channel.sendMessage("Liste des commandes: /n *help - Affiche les commandes d'aides, idiot. /n *insulte - répertoire d'insultes moyenâgeuses.")

}

	if (message.content === prefix + "insulte")
		message.channel.sendMessage("- Manant /n - Gredin /n - Sang-bleu")
})
