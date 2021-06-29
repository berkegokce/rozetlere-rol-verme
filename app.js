const Discord = require("discord.js");
const client = new Discord.Client();

const ayar = require("./ayarlar.json");

client.on("message", msg => {
  let flaggie = msg.author.flags;
  if (flaggie.any("PARTNERED_SERVER_OWNER")) {
    let member = msg.author;
    const partner = msg.guild.roles.cache.find(r => r.id === ayar.partner);
    let badge = msg.guild.member(member);
    badge.roles.add(partner);
  }

  if (flaggie.any("EARLY_SUPPORTER")) {
    let member = msg.author;
    const supporter = msg.guild.roles.cache.find(r => r.id === ayar.early);
    let badge = msg.guild.member(member);
    badge.roles.add(supporter);
  }

  if (flaggie.any("EARLY_VERIFIED_DEVELOPER")) {
    let member = msg.author;
    const developer = msg.guild.roles.cache.find(r => r.id === ayar.early);
    let badge = msg.guild.member(member);
    badge.roles.add(developer);
  }

  if (flaggie.any("HYPESQUAD_EVENTS")) {
    let member = msg.author;
    const hypesquad = msg.guild.roles.cache.find(r => r.id === ayar.hypesquad);
    let badge = msg.guild.member(member);
    badge.roles.add(hypesquad);
  }

  if (flaggie.any("VERIFIED_DEVELOPER")) {
    let member = msg.author;
    const verifieddeveloper = msg.guild.roles.cache.find(
      r => r.id === ayar.botdev
    );
    let badge = msg.guild.member(member);
    badge.roles.add(verifieddeveloper);
  }
});

client.login(ayar.token)
