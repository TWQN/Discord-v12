const Discord = require("discord.js")
const { client, config } = require("../index.js")

client.on("ready", () => {

    console.log(`|\n|    NBRP By TWQN\n|   Made by TWQN#9999\n|\n| Last Update: 2021-05-02\n|\n| Bot: ${client.user.tag}\n|`)

    client.user.setActivity(`Noord Brabant v${config.version}`, { type: "PLAYING" }).catch(console.error);

})