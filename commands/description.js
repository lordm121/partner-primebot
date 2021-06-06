const fs = require("fs");
const Discord = require("discord.js");
const x73db = require("x73db")
const ms1 = require("ms");

const db = new x73db("coolshare")

const dba = new x73db("cooldown")

  const moment = require("moment");
module.exports = {
  name: "description.js",
  aliases: ["sd","description","set-description"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  guilOwnerOnly: true,
  cooldown: 6000,
  run: async (bot, message, args, dev) => {


if(!args) return message.channel.send(`**Pls Type New description :) **`);

message.channel.send(`> **Hello ${message.author} Done Changed description Of Your Server To **\n **${de} \n: Old description Is ${des || "Pls Join To Our Server"}**`);

db.set(`des_${message.guild.id}`, de);

          }

}

