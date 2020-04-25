const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const Enmap = require("enmap");

bot.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the command file itself
    let props = require(`./commands/${file}`);
    // Get just the command name from the file name
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    // Here we simply store the whole thing in the command Enmap. We're not running it right now.
    bot.commands.set(commandName, props);
  });
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

bot.login(config.token);
