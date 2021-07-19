const Discord = require("discord.js")
/**/
const data = {};
const cooldowns = new Discord.Collection();
module.exports = class {
async run(message,bot) {
  //const data = {};
  

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  
let premuim =  await Premuim.findOne({Guild: message.guild.id})
if(!premuim) { Premuim.create({ Guild: message.guild.id});}
  data.premuim = premuim;
  let guild = await Guild.findOne({ guildID: message.guild.id});
  if(!guild) { Guild.create({ guildID: message.guild.id }); }
  data.guild = guild;
  if (guild) {
  if (!message.content.toLowerCase().startsWith(guild.prefix.toLowerCase())) return;
  let args = message.content.split(" ");
  const argsr = message.content
    .slice(guild.prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = argsr.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = bot.commands.get(cmd);
  if (!command) command = bot.commands.get(bot.aliases.get(cmd));
   
  if (!message.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) return;
  if (!command.enabled) return await message.channel.send(new Discord.MessageEmbed().setColor("#2c2f33").setDescription(`This command is **Disable** for now`));
 
  let neededPermissions = [];
	  if(!command.botPermissions.includes("EMBED_LINKS")){
		  command.botPermissions.push("EMBED_LINKS");
	  }
	  command.botPermissions.forEach((perm) => {
		  if(!message.channel.permissionsFor(bot.user).has(perm)){
			  neededPermissions.push(perm);
		  }
	  });
	 if(neededPermissions.length > 0){
		  return message.channel.send(`I don't have a ${neededPermissions.map((p) => `\`${p}\``).join(", ")} permissions`);
	  }
	  neededPermissions = [];
	  command.memberPermissions.forEach((perm) => {
		  if(!message.channel.permissionsFor(message.member).has(perm)){
			  neededPermissions.push(perm);
		  }
	  });
	  if(neededPermissions.length > 0){
		  return message.channel.send(`You don't have a ${neededPermissions.map((p) => `\`${p}\``).join(", ")} permissions`);
	 }
	  if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	  };
	  const now = Date.now();
	  const timestamps = cooldowns.get(command.name);
	  const cooldownAmount = ( command.cooldwon || 1)*1000; 
	  if (timestamps.has(message.guild.id)) {
	const expirationTime = timestamps.get(message.guild.id) + cooldownAmount;
	if (now < expirationTime) {
		const timeLeft = (expirationTime - now)/1000/// 1000;
		return message.channel.send(`Please wait ${timeLeft.toFixed(1)} second`).then(msg=> msg.delete({ timeout:timeLeft.toFixed(1)*1000 }));
	}
	  }
	  timestamps.set(message.guild.id, now);
	  let prefix = guild.prefix;
	  if (command) command.run(bot, message, args, prefix, data , cmd, command);
	  setTimeout(() => timestamps.delete(message.guild.id), cooldownAmount);
    
    
    
/*if(!bot.hama.has(command.name)){
  bot.hama.set(command.name, new Discord.Collection());
}
    const timetamps = bot.hama.get(command.name)
    const Amount = (0);
          if(timetamps.has(message.author.id)){
            const expirationtime = timetamps.get(message.author.id) + Amount
            if(now< expirationtime){
              const timeleft = (expirationtime - now)/1000
return message.channel.send(`Please wait ${timeleft.toFixed(1)} second`).then(msg => msg.delete({ timeout: timeleft.toFixed(1)*1000}))
            }}
                                                                                                    
      timetamps.set(message.author.id, now)
    if(command) command.run(bot, cmd, data,message,args, prefix)
    
    setTimeout(() => timetamps.delete(message.author.id), Amount)
    */
               
    
    
  }
  }
}