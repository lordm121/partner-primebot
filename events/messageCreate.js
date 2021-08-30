const Discord = require("discord.js")
/**/
const data = {};
const cooldowns = new Discord.Collection();
module.exports = class {
async run(message,bot) {
  //const data = {};
  

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  

  let guild = await Guild.findOne({ guildID: message.guild.id});
  if(!guild) { Guild.create({ guildID: message.guild.id }); }
  data.guild = guild;
  let lang = await Lang.findOne({ guildID: message.guild.id });
  if(!lang) { Lang.create({ guildID: message.guild.id });} 
  data.lang = lang.language
  let prime = await Prime.findOne({ guildID: message.guild.id });
/* if (prime && prime.log === "enable") return message.channel.send({content:`you don't have Premium version`});*/
let user = await User.findOne({userID: message.author.id });
  if(!user) { User.create({userID: message.author.id})}
   data.user = user
  let server = await Servers.findOne({serverID: message.guild.id})
  /*if(!server){ Servers.create({serverID: message.guild.id})}
  data.server= server */
  
  
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
   if(command.prime){
      let data = await Prime.findOne({Guild: message.guild.id})
     
      if(!data) return message.channel.send({content: `this server dont have premium time  for buy premium time join support server and contact owner of the bot`})
    
      if(!data.Permanent && Date.now() > data.time){
        data.delete();
  
        return message.channel.send({content:`premium time  on your server ended for buy mor join support server `}) 
      } }

  if (!message.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) return;
  if (!command.enabled) return await message.channel.send({content: `This command temporary \`disabled\``})
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
		  return message.channel.send({content:`I don't have a ${neededPermissions.map((p) => `\`${p}\``).join(", ")} permissions`});
	  }
	  neededPermissions = [];
	  command.memberPermissions.forEach((perm) => {
		  if(!message.channel.permissionsFor(message.member).has(perm)){
			  neededPermissions.push(perm);
		  }
	  });
	  if(neededPermissions.length > 0){
		  return message.channel.send({content:`You don't have a ${neededPermissions.map((p) => `\`${p}\``).join(", ")} permissions`});
	 }
	  if (!bot.cooldowns.has(command.name)) {
		bot.cooldowns.set(command.name, new Discord.Collection());
	  };
	  const now = Date.now();
	  const timestamps = bot.cooldowns.get(command.name);
	  const cooldownAmount = ( command.cooldown|| 1) * 1000; 
	  if (timestamps.has(message.guild.id)) {
	const expirationTime = timestamps.get(message.guild.id) + cooldownAmount;
	if (now < expirationTime) {
		const timeLeft = (expirationTime - now)/1000/// 1000;
		return message.channel.send({content:`Please wait ${timeLeft.toFixed(1)} second`}).then(msg=> msg.delete({ timeout:timeLeft.toFixed(1)*1000 }));
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
