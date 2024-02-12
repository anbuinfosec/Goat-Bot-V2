module.exports = {
    config: {
        name: "yo",
        version: "1.0",
        author: "kivv",
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "yo") return message.reply("𝑶𝒖𝒊 𝒃𝒓𝒐 𝒄'𝒆𝒔𝒕 𝒒𝒖𝒐𝒊 𝒍𝒆  𝒑𝒍𝒂𝒏 𝒅`𝒂𝒖𝒋𝒐𝒖𝒅𝒉𝒖𝒊 , 𝒋𝒆 𝒔𝒆𝒓𝒂𝒊 𝒓𝒂𝒗𝒊𝒓 𝒅𝒆 𝒗𝒐𝒖𝒔 𝒂𝒊𝒅𝒆𝒓❗💀♨?");
}
};