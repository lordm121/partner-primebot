const Discord = require("discord.js")
module.exports = class {
async run(guild, bot) {
  if(guild.memberCount < 99 ){

    guild.owner.send(`  name ( ${guild.name} ) bot need 100 members guild  ( ${guild.memberCount}) `)//by lord

   guild.leave();

  }
		const thanksEmbed = new Discord.MessageEmbed()			
                        .setAuthor("Thank you for adding me to your guild !")
			.setDescription("To configure me,\n type **.help** and look at the **Share** commands!.")
			.setColor("#2c2f33")
                        .setTimestamp();
		guild.owner.send(thanksEmbed).catch(() => {});
    
	
		const text = "✅ **__Joined New Guild__** \n **Guild Name**: "+guild.name+" \n **Guild Owner Name**: " + `${guild.owner.user.username}` + " \n **Guild Owner ID**: " + `${guild.owner.id}` + "\n **Guild Member Size**: "+guild.memberCount+" \n **Guild Bots Size** ("+guild.members.cache.filter((m) => m.user.bot).size+" bots)";
		const logsEmbed = new Discord.MessageEmbed()
			.setColor("#2c2f33")
			.setDescription(text);
		bot.channels.cache.get("851392343814307840").send(logsEmbed);     
}};
