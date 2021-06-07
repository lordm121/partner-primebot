const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
    name: "setlang.js",
    aliases: ["setlang"],
    description: "You can ban a member, or multiple members using this command",
    usage: [".setlang"],
    category: ["Admin"],
    enabled: true,
    memberPermissions: ["BAN_MEMBERS"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
    ownerOnly: false,
    cooldown: 6000,
    run: async (client, message, args, dev) => {
let data = await Lang.findIne({guildID: message.guild.id})

  const language = this.bot.languages.find((l) => l.name === args[0] || l.aliases.includes(args[0]));

		if(!args[0] || !language){
			return message.error("i cant find", {
				list: this.bot.languages.map((l) => "`"+l.name+"`").join(", ")
			});
		}

		data.guild.language = language.name;
		await data.guild.save();
        
		return message.sendT("you chnaged language secc");
    }}