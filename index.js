const { Client } = require("discord.js");
const client = new Client();
const { BOT_TOKEN } = require("./config/config.json");

client.once("ready", () => {
  console.log("Bot started");
  client.user.setPresence({
    type: "PLAYING",
    activity: { name: "simon says" },
    status: "dnd",
  });
});

config;

client.login(BOT_TOKEN);
