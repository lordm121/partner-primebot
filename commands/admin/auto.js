 
const fs = require("fs");
const verificationLevels = {

	NONE: 'None',

	LOW: 'Low',

	MEDIUM: 'Medium',

	HIGH: '(╯°□°）╯︵ ┻━┻',

	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'

};
const regions = {

	brazil: 'Brazil',

	europe: 'Europe',

	hongkong: 'Hong Kong',

	india: 'India',

	japan: 'Japan',

	russia: 'Russia',

	singapore: 'Singapore',

	southafrica: 'South Africa',

	sydeny: 'Sydeny',

	'us-central': 'US Central',

	'us-east': 'US East',

	'us-west': 'US West',

	'us-south': 'US South'

};
const Discord = require("discord.js");
const { Color } = require("../../config.js");
const db = require("quick.db")
const pretty = require("pretty-ms");
const ms = require("ms")
const day = require("dayjs")
let embed = new Discord.MessageEmbed()

module.exports = {
  name: "auto",
  aliases: ["auto"],
  description: "share your server with prime time ",
  usage: ["p!auto"],
  category: ["Admin"],
  enabled: true,            
  memberPermissions: [ "MANAGE_GUILD"],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","CREATE_INVITE","MANAGE_CHANNELS"],        
  ownerOnly: false,            
cooldown: 0,
  prime: true,
  run: async (bot, message, args, dev,command,prefix) => {
    let data = await Guild.findOne({guildID: message.guild.id})
    const members = message.guild.members.cache;

		const channels = message.guild.channels.cache;

  const postChannel = bot.channels.cache.get(data.Channel)///db.get(`${message.guild.id}.serverPostChannel`); // الوقت بتاع نشر السيرفر فيه كام ثانية
  
if(!postChannel) return message.channel.send(`Please set up share channel: use:\`p!setchannel <#channel>\``)
    
  
///if(!data.Descripiont) return message.channel.send(" Your server don't have any description please give me your description `${prefix}sd`")
   //اليوم بالثانية

    const filter = bot.channels.cache.get(data.Channel)
  ///  if (postChannel && !filter) return data.delete(), embed.setDescription(`**إذا قمت بحذف الروم مرة اخري سوف يتم حظر السيرفر! | ⚠️**`).setColor("#FF0202"), message.channel.send(embed)

   let cooldown = 21600000
  	let lastDaily = data.bump 
  	if (cooldown - (Date.now() - lastDaily) > 0) {
      let time = data.bump
      
      const remaining = pretty(Math.round((cooldown) - (Date.now() - lastDaily)), { verbose: true, unitCount: 3, secondsDecimalDigits: 0 })
  message.channel.send(`share command automatically working you must waiting for  ${remaining}`)
    
   // let timeObj = ms(cooldown - (Date.now() - lastDaily)); 


} else {
  

  


  
  
  
  let lord= await Guild.findOne({guildID: message.guild.id})
  
     message.channel.send(`Your server shared for sure please see this channel <#${lord.Channel}>`)
      
  

            
           ////   message.channel.send("!bump")
            
     setInterval(async () => {
       
  let data = await Guild.find()
      await data.forEach(async (res) => {
      await Guild.findOne({
       guildID: res.guildID,
       Channel: res.Channel
            })
    
    
      
        const channelsPost = bot.channels.cache.find(ch => ch.id == res.Channel)////db.get(`${res.ID}.serverPostChannel`));      
        if (channelsPost) {
          const chann = bot.channels.cache.find(ch => ch.id == res.Channel)////db.get(`${message.guild.id}.serverPostChannel`));
        chann.createInvite({
            temporary: false,
            max_uses: 0,
            max_age:  0  }).then(async invite => {
          let prime = await Prime.findOne({Guild: message.guild.id})
          let data = await Guild.findOne({guildID: invite.guild.id})
    let premium = prime.prime
        
          const messagePosts = {
        
              description: `
              [Join Server](${invite.url})
              \n\n ${data.Description || "no description set"}\n\n
              
              
•: Server: ${premium||"Normal"}
•: Verification Level:  ${verificationLevels[message.guild.verificationLevel]}
•:earth_africa:Region:  ${regions[message.guild.region]}
•:busts_in_silhouette:Member Count:  ${message.guild.memberCount} | •:bust_in_silhouette:Humans:  ${members.filter(member => !member.user.bot).size} | •:robot:Bots:  ${members.filter(member => member.user.bot).size}
•:sparkles:Boost Count: ${message.guild.premiumSubscriptionCount || '0'}
•:speech_balloon:Text Channels: ${channels.filter(channel => channel.type === 'text').size}
•:loud_sound:Voice Channels: ${channels.filter(channel => channel.type === 'voice').size}`,

                             
              
             color: data.Color,////db.get(`${message.guild.id}.serverColor`), 
              author: {
                name: message.guild.name,
                icon_url: message.guild.iconURL(),
              },
              footer: {
                text: "Posted by " + message.author.username,
                icon_url: message.author.avatarURL(),
              },
              image: {
                url: (data.Banner)////db.get(`${message.guild.id}.serverBanner`),
              },
              thumbnail: {
                url: message.guild.iconURL({ dynamic: true }),
              },
              timestamp: new Date(),
            };
            

            if (channelsPost && messagePosts) {
              hook(messagePosts, channelsPost, bot);
            };
          }).catch(err => console.log(err));
        } else {
          console.log(`Not found channel in server ${message.guild.name}`);
        }
      let findServerr = await Guild.findOne({ guildID: message.guild.id });
            let lastDailyy = findServerr.bump;
            if (cooldown - (Date.now() - lastDailyy) > 0)return; ///message.delete().then(await message.channel.send('This command is used only once every 30 minutes.', { channel: message.channel }));
		     /// message.delete().then( message.channel.send(`shared`) )
		          await Guild.updateOne({ 
			    	guildID: message.guild.id 
			      }, { 
			    	$set: { 
			    		bump: new Date().getTime()
			    	}
			   	  })
		          await Guild.updateOne({ 
			    	guildID: message.guild.id 
			      }, { 
			    	$inc: { 
			    		bumps: 1
			    	}
			   	  })
			    return;    
      })
      },21600000);
    }
                              


function hook(messagePost, channelsPost, bot,message) {
  try {
    channelsPost.send({embed: messagePost});
     channelsPost.createOverwrite(channelsPost.guild.id, {
      SEND_MESSAGES: false,
      READ_MESSAGES: true,
      VIEW_CHANNEL: true     

    });
  } catch { 
    console.log(`ERR POST IN SERVER ${channelsPost.guild.name} | ID: ${channelsPost.guild.id}`);
  
   }}

    
  }}
