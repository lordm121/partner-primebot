
const Discord = require("discord.js")
const devs = "768944616724103170"
module.exports = {
  name: "say",
  aliases: ["say"],
  description: "",
  usage: ["p!say"],
  category: ["General"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 10,
  run: async (bot, message, args, dev, data) => {
 /* const sayMessage = args.join(" ") //a mensagem no caso tudo depois que vier do prefixo seguido do comando t.say bla bla bla (tudo que vier apأ�s o t.say serأ� escrito)
   message.delete()//deleta a mensagem logo apأ�s executar o comando e pegar os args
 message.channel.send(sayMessage) //aqui o comando vai ser mandado no chat que foi solicitado o comando
 */
if (!devs.includes(message.author.id)) return;

  
    let say = message.content.split(" ").slice(1).join(" ")
  if(!say) return message.channel.send("I Cannot Repeat Blank Message")
  let embed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL())
  .setDescription(`${say}`)
  .setColor("")
.setFooter(`Embed by ${message.author.username}`)
.setTimestamp()
  message.channel.send(embed)
  
  }} 