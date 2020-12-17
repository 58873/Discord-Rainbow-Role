const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');
const Enmap = require("enmap");
const fs = require("fs")

const Twit = require('twit')
const notifier = require('node-notifier');
const open = require('open');
const franc = require('franc')

const apikey = 'xxx'
const apiSecretKey = 'xxx'
const accessToken = 'xxx'
const accessTokenSecret = 'xxx'

var T = new Twit({
  consumer_key:         apikey,
  consumer_secret:      apiSecretKey,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret,
});

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
