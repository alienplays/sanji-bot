exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.channel.send('⊂(◉‿◉)つ Bonjour '+ message.author +', je suis le nouveau bot du Coconoclub créé par Coconori.\rPour le moment je ne sais quasiment rien faire, mais j\'espère que mon développeur apprendra vite à coder pour me développer.\rBonne amusement sur le serveur ;)'); // "<@" + message.author.id +">"
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "bot",
  category: "Fun",
  description: "Description du bot",
  usage: "bot"
};
