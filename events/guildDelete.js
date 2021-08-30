const Discord = require("discord.js")
module.exports = class {
async run(guild, bot) {
		const thanksEmbed = new Discord.MessageEmbed()			
                       .setAuthor("I'm leaving in your server !!")
		       .setDescription("If you have a report join this server https://discord.gg/aW6TnhGeSS")
		       .setColor("#2c2f33")
                       .setTimestamp();
		guild.owner.send({embeds:[thanksEmbed]})
    
	
		const text = "❎ **__Leaving Old Guild__** \n **Guild Name**: "+guild.name+" \n **Guild Owner Name**: " + `${guild.owner.user.username}` + " \n **Guild Owner ID**: " + `${guild.owner.id}` + " \n **Guild Bots Size** ("+guild.members.cache.filter((m) => m.user.bot).size+" bots)";
		const logsEmbed = new Discord.MessageEmbed()
			.setColor("#2c2f33")
			.setDescription(text);
		bot.channels.cache.get("851392408847515678").send({embeds:[logsEmbed]});     
}};
