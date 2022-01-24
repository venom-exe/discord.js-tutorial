const { Client } = require("discord.js");
const client = new Client({ intents: 32767 });
const config = require("./config.json");

client.once("ready", () => {
    console.log("i am ready");
client.user.setActivity("i am on", { type: "PLAYING"});
});

client.login(config.token);