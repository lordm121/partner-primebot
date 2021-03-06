 
const ownerid = "768944616724103170";

module.exports = {
  name: "ginvite",
  aliases: ["gi"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  guilOwnerOnly: true,
  cooldown: 0,
  run: async (bot, message, args, dev) => {

        if (message.author.id === ownerid) {
        let guild = null;

        if (!args[0]) return message.channel.send("Enter Guild Name or Guild ID of where you want Invite Link.")

        if(args[1]){
            let fetched = bot.guilds.cache.find(g => g.name === args.join(" "));
            let found = bot.guilds.cache.get(args[1]);
            if(!found) {
                if(fetched) {
                    guild = fetched;
                }
            } else {
                guild = found
            }
        } else {
            return message.channel.send({content:`That's the Invalid Guild Name`});
        }
        if(guild){
            let tChannel = guild.channels.cache.find(ch => ch.type == "text" && ch.permissionsFor(ch.guild.me).has("CREATE_INSTANT_INVITE"));
            if(!tChannel) {
                return message.channel.send({content:`Sorry, I doesn't have CREATE_INSTANT_INVITE Permission There!`}); 
            }
            let invite = await tChannel.createInvite({ temporary: false, maxAge: 0 }).catch(err => {
                return message.channel.send({content:`${err} has occured!`});
            });
            message.channel.send(invite.url);
        } else {
            return message.channel.send({content:`\`${args.join(' ')}\` - I'm not in that Server.`});
        }
    } else {
        return;
    }
    }

}
