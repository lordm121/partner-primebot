const Discord = require("discord.js");


const fs = require("fs");
const request = require("request");
const prefix = "p!";
const {Client, Collection, MessageEmbed } = require("discord.js");


const bot = new Client({
   intents: ["GUILDS", "GUILD_INVITES", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"],
    allowedMentions: {
        parse: ["everyone", "roles", "users"],
        repliedUser: true
    },
    partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]

});



const { inspect } = require("util");
let dev = ["738478465870987425","386188491953799178"];
const cmd = require("node-cmd");
const { I18n } = require("locale-parser");
const pars = new I18n({ defaultLocale:"en"});
bot.pro = new I18n({ defaultLocale: "en" });

global.logChannel = bot.channels.cache.get("835968578699264011")
global.mongoose = require('mongoose')
mongoose.connect("mongodb+srv://Partner:partner1234@cluster0.fwuix.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true,  keepAlive: true}).then(() => {
  console.log("Connected to the Mongodb database.");
}).catch((err) => {
  console.log("Unable to connect to the Mongodb database. Error:" + err);
});
global.Guild = require("./data/guild.js");

///global.User = require("./data/user.js");
global.Lang = require("./data/lang.js");
global.User = require("./data/user.js")
global.Prime = require("./data/prime.js");
global.Servers = require("./data/servers/server.js")
bot.commands = new Collection();
bot.slashCommands = new Collection();
bot.aliases = new Collection();
bot.cooldowns = new Collection();

bot.catagories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handler/${handler}`)(bot);
});


/***/
let util = require("util"),
  readdir = util.promisify(fs.readdir);

const init = async () => {
  // Then we load events, which will include our message and ready event.
  const evtFiles = await readdir("./events/");
  console.log(`Loading a total of ${evtFiles.length} events.`, "log");
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    console.log(`Loading Event: ${eventName}`);
    const event = new(require(`./events/${file}`))(bot);
    bot.on(eventName, (...args) => event.run(...args, bot));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
};
init();

bot.on("ready", async () => {
  console.log(`bot now is ready!`);
  await bot.user.setStatus("idle");
  await bot.user.setActivity(`${prefix}help || partner-bot.tk`, { type: "COMPETING" })})
bot.login("ODQ5Nzg5MDM3MzA4NDExOTY1.YLgRtg.mvxpr_rvSPPCB0zSyTHedB_iLfU")
