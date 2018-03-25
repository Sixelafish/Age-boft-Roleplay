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
		var coups = Math.floor(Math.random() * 451);
		message.channel.send( @sender + " tu à pêcher ! Prend ces " + coups + " coups de fouet")
		message.channel.send({ files: [{ attachment: "https://cdn.discordapp.com/attachments/331837845851340800/424242014163304449/telechargement.jpg", name: 'telechargement.jpg' }] })
			}
	}
);
