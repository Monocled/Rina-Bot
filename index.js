const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./config.json');

client.once('ready', () => {
	console.log('${client.user.tag} Ready!');
});

client.on('message', message => {
	if (message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === `${prefix}ping`) {
		message.channel.send('Pong!');
	} 
	if (command === `${prefix}beep`) {
		message.channel.send('Boop.');
	}
	if (message.content === `${prefix}server`) {
	  message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	}
	else if (message.content === `${prefix}user-info`) {
	  message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
	  
});

client.login("token");
