
const Discord = require("discord.js")

module.exports = {
  name: "say",
  aliases: ["say"],
  description: "To show you all command of the bot",
  usage: ["s!help","s!help <command>"],
  category: ["General"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 1000,
  run: async (bot, message, args, dev, data) => {
 /* const sayMessage = args.join(" ") //a mensagem no caso tudo depois que vier do prefixo seguido do comando t.say bla bla bla (tudo que vier apأ�s o t.say serأ� escrito)
   message.delete()//deleta a mensagem logo apأ�s executar o comando e pegar os args
 message.channel.send(sayMessage) //aqui o comando vai ser mandado no chat que foi solicitado o comando
 */
  
  
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