const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix =  ("*")

bot.on('ready', function() {
	bot.user.setGame("Commande aide : *help");
	console.log("Connected");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
	if (message.content === prefix + "help"){
		message.channel.sendMessage("```\n Liste des commandes: \n *help - Affiche les commandes d'aides, idiot. \n *insulte - Répertoire d'insultes moyenâgeuses. \n *flagellation - Permet de se néttoyer de tout ses pêchers.```");
	}

	if (message.content === prefix + "insulte"){
		message.channel.sendMessage("```\n Listes d'insultes courantes : \n - Manant \n - Gredin \n - Sang-bleu```");
	}

	if (message.content === prefix + "flagellation"){
		const aleatoire = Math.floor(Math.random()*3);
			switch(aleatoire){
			case 0:message.channel.sendMessage("1")
			case 1:message.channel.sendMessage("2")
			case 2:message.channel.sendMessage("3")
			case 3:message.channel.sendMessage("4")
			}
	}
			
});
