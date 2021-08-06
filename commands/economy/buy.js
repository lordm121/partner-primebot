const Discord = require("discord.js")
const day = require("dayjs")

let embed = new Discord.MessageEmbed()
module.exports = {
  name: "buy",
  aliases: ["buy"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  guilOwnerOnly: true,
  cooldown: 10,
  run: async (bot, message, args, dev) => {
       ///   let member = message.guild.member("768944616724103170")////message.mentions.users.first())
    ///if(!member) return message.reply(` please mention owner of the bot `)
  
    
    let author = await User.findOne({ userID: message.author.id });
    let loc = await User.findOne({userID: "768944616724103170" });
   /// if(!loc) return bot.nodb(member.id)
            
        if(!args[1]) {
            const buyError = new Discord.MessageEmbed()
            .setDescription("You Need to Provide an Item you want to Purchase!")
            .setColor("BLUE")

            return message.channel.send(buyError)
        }
      //  let items = await ////db.fetch(`items_${message.guild.id}_${message.author.id}`, {items: []})

        if(args[1] == '1month') {
    let x = author.money
          if (!args[2]) return message.reply(`please specify guild id`)
          if(!bot.guilds.cache.has(args[2])) return message.reply(`your guild id is invalid`)
          let money = author.money
          if(money < 100000) return message.channel.send(`you cant buy because your money not enough to buy \n your money: \`$${x}\`
          money required: \`$100000\``)
          const dev = bot.users.cache.get("768944616724103170")
          const  m = new Discord.MessageEmbed()
     .setThumbnail(message.guild.iconURL())
      .setAuthor(bot.user.username, bot.user.avatarURL())

          . setDescription(`
          GUILD NAME:\`${message.guild.name}\`
          GUILD ID: \`${message.guild.id}\`
          PRIME TYPE: \`1 MONTH\`
          RECEIVED MONY: \`100000\`
          `)
          dev.send(m)
              
            const embed = new Discord.MessageEmbed()
            .setDescription(`Successfuly Bought One month of prime bot you must waiting for 48 hours for admin approval your request`)
            .setColor("BLUE")        
        author.money -= Math.floor(parseInt(100000))
          loc.money +=  Math.floor(parseInt(100000))
       author.save()
          loc.save()
          message.channel.send(embed)
       bot.channels.cache.get("869280020399546418").send(new Discord.MessageEmbed().setDescription(`
       GUILD NAME: \`${message.guild.name}\`
       GUILDID: \`${message.guild.id}\`
       PRIME TIME: \`1 MONTH\`
       request by : \`<@${message.author.id}>\`
       
       `
      ))
        }

        if(args[1]== '3month') {
          let money = author.money
            if(money < 200000) {
              
                const purchaseError2 = new Discord.MessageEmbed()
                .setDescription(`You Don\'t Have Enough Money to buy prime bot\n your money\`$${money}\`\n required: \`$200000\``)
                .setColor("BLUE")
        
                return message.channel.send(purchaseError2)
            }
            const dev = bot.users.cache.get("768944616724103170");
           const embed = new Discord.MessageEmbed()
           .setThumbnail(message.guild.iconURL())
      .setAuthor(bot.user.username, bot.user.avatarURL())
  
           
           .setDescription(`
            GUILD NAME :\`${message.guild.name}\`
  GUILD ID: \`${message.guild.id}\`
  PRIME TYPE: \`3 MONTH\`
 YOU RECEIVE BY: 
 <@${message.author.id}> MONEY: \`$200000\``)
           dev.send(embed)
            const purchaseCarSuccess = new Discord.MessageEmbed()
            .setDescription(`Successfuly bought prime bot  please wait for 2 or 3 days until approve you request`)
            
          author.money -= Math.floor(parseInt(200000));
    loc.money += Math.floor(parseInt(200000));
    author.save();
    loc.save()
            message.channel.send(purchaseCarSuccess)

          bot.channels.cache.get("869286981190963250").send(new Discord.MessageEmbed().setDescription(`
    GUILD NAME: \`${message.guild.name}\`
    GUILD ID: \`${message.guild.id}\`
    PRIME TIME: \`3 MONTH\`

            
            `))
          
        }}}
