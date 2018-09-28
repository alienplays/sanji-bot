exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  if(message.author.id !== client.config.ownerID) return message.reply("Vous n'êtes pas le propriétaire du Bot");
  await message.reply("Bot is shutting down.");
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  });
  process.exit(1);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "reboot",
  category: "System",
  description: "Arrêt du Bot. Si tourne sous PM2, le Bot se relancera automatiquement.",
  usage: "reboot"
};
