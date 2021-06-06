const Discord = require('discord.js')
const schema = require ('../../data/guild.js')


module.exports = {
    name: "set-room.js",
    aliases: ["st"],
    description: "You can ban a member, or multiple members using this command",
    usage: ["s!ban [@User]"],
    category: ["Moderation"],
    enabled: true,
    memberPermissions: ["BAN_MEMBERS"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
    ownerOnly: false,
    cooldown: 6000,
    run: async (bot, message, args, dev) => {
      let channel = message.mentions.channels.first() // Finding a channel from the first channel mention
if (!channel) channel = bot.channels.cache.get(args[0]) // Trying to find a channel from the client cache of the specified id 
if (!channel) channel = message.guild.channels.cache.find(u => u.id === args[0]) // Trying to find a channel from the message guild using the first argument id
if (!channel) channel = message.guild.channels.cache.find(u => u.name === args.join(" ")) // Trying to find a channel from the message guild using the first argument name
if (!channel) return message.channel.send('Please make sure you mention a valid channel!') // If no channel was found then it will return with this message

let data = await schema.findOne({
    guildID: message.guild.id
})

if (data) {
await schema.findOneAndDelete({ // If data was found then it will delete the data to disable the modlogs
    guildID: message.guild.id
})

message.channel.send('Modlogs have been disabled in this guild!\nTo enable them use the command \`>setmodlogs <channel>\`')
} else if (!data) {

let newData = new schema({ // If no data was found then this is defining the new data to be saved
    guildName: message.guild.name,
    guildID: message.guild.id,
    channelID: channel.id
})
newData.save() // Saving the new data
message.channel.send(`${channel} has been set as the modlogs channel!`)

}}}