const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

let tweetchannel = message.guild.channels.find('name', 'tweet');
    if (message.channel === tweetchannel) {
      let inputmessage = args.join(' ')
      if (message.channel === tweetchannel)
        twitter.post('statuses/update', { status: `${inputmessage}` }, function(err, data, response) {
            console.log('Tweet Successfully Tweeted!');
            console.log(`${message.author.username} has just Tweeted "${inputmessage}"`);
        })} else {
          let inputmessage = args.join(' ');
          console.log(`${message.author.username} attempted to Tweet "${inputmessage}", but failed because they were not in the right channel.`);
        }
      };

}

module.exports.help = {
    name: "simple"
}
