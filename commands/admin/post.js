const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
    name: "ban",
    aliases: ["band"],
    description: "You can ban a member, or multiple members using this command",
    usage: ["s!ban [@User]"],
    category: ["Moderation"],
    enabled: true,
    memberPermissions: ["BAN_MEMBERS"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
    ownerOnly: false,
    cooldown: 6000,
    run: async (client, message, args, dev) => {
  let bl = db.get(`bl_${message.guild.id}`);

  let des = db.get(`des_${message.guild.id}`);
let timeshare = 0

let times = db.get(`coolshare_${message.guild.id}`);

if (times !== null && timeshare - (Date.now() - times) > 0) {

let s = ms1(timeshare - (Date.now() - times), { long: true })

message.channel.send(new Discord.MessageEmbed().setTitle(`${message.guild.name}`).setFooter(``).setDescription(`you muste waiting until end ${s}`))
}else{
    

            var invite = await message.channel.createInvite();

  bot.guilds.cache.forEach(c =>{
let rooms = db.get(`shareroom_${c.id}`);

if(!rooms){

 c.channels
 .create("Partners", {
type: "text" 
 
 })
   .then(r=>{

      r.createOverwrite(message.guild.id,{

        SEND_MESSAGES: false

    })

          db.set(`shareroom_${c.id}`, r.id);

          rooms = r.id;

                      let room = c.channels.cache.get(rooms);

            room.send(`
            \`Server Name\`: ${message.guild.name}
            
            \`Server Description\`: ${des || null}
            
            \`Server Owner\`: ${message.guild.owner}
            \`Invite\`: ${invite}`)

            return;

})
}