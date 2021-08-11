 
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
//const db = require("quick.db")
const pretty = require("pretty-ms");
const ms = require("ms")
const day = require("dayjs")
let embed = new Discord.MessageEmbed()
const cdtime = 4
const db = require("../../data/servers/server.js")
module.exports = {
  name: "share.js",
  aliases: ["share"],
  description: "share your server .share ",
  usage: ["only .share or prefix+ share"],
  category: ["Admin"],
  enabled: true,            
  memberPermissions: [ "MANAGE_GUILD"],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","CREATE_INVITE","MANAGE_CHANNELS"],        
  ownerOnly: false,            
cooldown: 0,
  run: async (bot, message, args, dev,command,prefix) => {
    let data = await Guild.findOne({guildID: message.guild.id})
    const members = message.guild.members.cache;
    let server = await Servers.findOne({serverID: message.guild.id})
		const channels = message.guild.channels.cache;

  /////const postChannel = bot.channels.cache.get(server.channelID)///db.get(`${message.guild.id}.serverPostChannel`); // الوقت بتاع نشر السيرفر فيه كام ثانية

   if (!server) message.channel.send("Please setup your server Go to DASHBOARD-https://www.partner-bot.tk")

 ///   

 
   let cooldown = 43200000;
  	let lastDaily = data.bump;
  	if (cooldown - (Date.now() - lastDaily) > 0) {
      let time = data.bump
      const remaining = pretty(Math.round((cooldown) - (Date.now() - lastDaily)), { verbose: true, unitCount: 3, secondsDecimalDigits: 0 })
  message.channel.send(`You must wait **${remaining}** before you can use this command again`)
    
 
    
    let timeObj = ms(cooldown - (Date.now() - lastDaily)); 


} else {
  
  let lord= await Servers.findOne({serverID: message.guild.id})
  
message.channel.send(`Your server shared for sure please see this channel <#${lord.channelID}>`)
  
let data = await Servers.find()
      await data.forEach(async (res) => {
      await Servers.findOne({
       serverID: res.serverID,
       channelID: res.channelID
            })
        
        
        
        const channelsPost = bot.channels.cache.find(ch => ch.id == res.channelID)////db.get(`${res.ID}.serverPostChannel`));
        if (channelsPost) {
         

const p = await message.channel.createInvite({ maxAge: 0 }).then(async invite => {

  /////////////////
  
  
let data = await Guild.findOne({guildID: message.guild.id})


let prime = await Prime.findOne({Guild: message.guild.id})
let premium = prime.prime
       

let b = await Servers.findOne({serverID: res.serverID})
let m = b.colors
         
            const messagePosts = {
        
              description: `
              [Join Server](${b.invitelink || invite.url})
           \n\n ${b.longDesc || "Welcome to our server"}\n\n
              
              
•:Server: ${premium||"Normal"}
•:pushpin: Type: ${b.tags}
•:paperclips: [Website](${b.link})
•Short Description: ${b.shortDesc}
•:Verification Level:  ${verificationLevels[message.guild.verificationLevel]}
•:earth_africa:Region:  ${regions[message.guild.region]}
•:busts_in_silhouette:Member Count:  ${message.guild.memberCount} | •:bust_in_silhouette:Humans:  ${members.filter(member => !member.user.bot).size} | •:robot:Bots:  ${members.filter(member => member.user.bot).size}
•:sparkles:Boost Count: ${message.guild.premiumSubscriptionCount || '0'}
•:speech_balloon:Text Channels: ${channels.filter(channel => channel.type === 'text').size}
•:loud_sound:Voice Channels: ${channels.filter(channel => channel.type === 'voice').size}`,

                             
              
             color: m,
              author: {
                name: message.guild.name,
                icon_url: message.guild.iconURL(),
              },
              footer: {
                text: "Posted by " + message.author.username,
                icon_url: message.author.avatarURL(),
              },
              image: {
                url: (data.Banner)
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
          console.log(`Not found channel in server ${db.get(`${res.ID}.serverName`)}`);
        }
      let findServerr = await Guild.findOne({ guildID: message.guild.id });
            let lastDailyy = findServerr.bump;
            if (cooldown - (Date.now() - lastDailyy) > 0)return;
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
        
      });
    };
  


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
