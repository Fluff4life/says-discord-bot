const { Client } = require("discord.js");
const client = new Client();
const { BOT_TOKEN, PREFIX } = require("./config/config.json");

client.once("ready", () => {
  console.log("Bot started");
  client.user.setPresence({
    type: "PLAYING",
    activity: { name: "simon says" },
    status: "dnd",
  });
});

client.on("message", (message) => {
  if (message.author.bot) return;
  let messageContent = message.content;
});

client.login(BOT_TOKEN);
