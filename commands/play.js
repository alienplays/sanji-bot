const YoutubeStream = require ('ytdl-core')
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    let channeVoc = message.guild.channels
    .filter(function (channel) { return channel.type === 'voice'})
    .first()
    channeVoc.join()
    .then(function(connection){
      console.log(args)
        let stream = YoutubeStream(args[0])
        stream.on('error', function() {
          message.reply("Je n'ai pas pu lire la vidéo :()")
          connection.disconnect()
        })
        connection.playStream(stream)
        .on('end', function (){
          message.delete();
          connection.disconnect()
        })
    })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["music","yt"],
  permLevel: "User"
};

exports.help = {
  name: "play",
  category: "Musique",
  description: "Joue une musique de Youtube",
  usage: "play [URL YOUTUBE]"
};
