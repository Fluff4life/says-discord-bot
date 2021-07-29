const { Client, MessageEmbed, ReactionManager } = require("discord.js");
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

  let simonRole = message.guild.roles.find((r) => r.name === "Controller");
  let competitorRole = message.guild.roles.find((r) => r.name === "Competitor");

  const reactionMessage = new MessageEmbed().setTitle(
    "React if you want to participate "
  );

  const awaitResponse = await message.channel.send(reactionMessage);
  awaitResponse.react("👍");

  const filter = (reaction, user) => {
    return (
      ["👍", "👎"].includes(reaction.emoji.name) &&
      user.id === message.author.id
    );
  };

  message
    .awaitReactions(filter, { max: 1, time: 10000, errors: ["time"] })
    .then((collected) => {
      const reaction = collected.first();

      if (reaction.emoji.name === "👍") {
        message.reply("you reacted with a thumbs up.");
      } else {
        message.reply("you reacted with a thumbs down.");
      }
    })
    .catch((collected) => {
      message.reply("you reacted with neither a thumbs up, nor a thumbs down.");
    });
});

client.login(BOT_TOKEN);
