const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix =  ("*")

bot.on('ready', function() {
	bot.user.setGame("Command: *help");
	console.log("Connectedç");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
	if (message.content === prefix + "help") {
		message.channel.sendMessage("```\n Liste des commandes: \n *help - Affiche les commandes d'aides, idiot. \n *insulte - Répertoire d'insultes moyenâgeuses. \n *flagellation - Permet de se néttoyer de tout ses pêchers.```")

	if (message.content === prefix + "insulte")
		message.channel.sendMessage("```\n Listes d'insultes courantes : \n - Manant \n - Gredin \n - Sang-bleu```")

	if (message.content === prefix + "flagellation")
		const aleatoire = Math.floor(Math.random()*5)
			switch(aleatoire){
			case 0:document.write("D");break;
			case 1:document.write("A");break;
			case 2:document.write("B");break;
			case 3:document.write("C");break;
			case 4:document.write("E");break;
			}
	}
}
