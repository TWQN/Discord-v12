const discord = require("discord.js");

module.exports.execute = async (client, message, args) => {
    console.log(`Test`)
    message.channel.send(`Tested`)

}
module.exports.help = {
    name: "test",
    aliases: [],
    category: "Test",
    usage: "",
    description: ""
}