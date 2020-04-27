const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const Enmap = require("enmap");
const fs = require("fs")

bot.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
})
bot.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    bot.commands.set(commandName, props);
  });
});
bot.login(config.token);
