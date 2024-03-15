module.exports = {
    config: {
        name: "salut",
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
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("𝑺𝒂𝒍𝒖𝒕 𝒍'𝒂𝒎𝒊(𝒆) 👋🍀✨✅ 𝑻𝒖 𝒕𝒓𝒐𝒖𝒗𝒆𝒔 𝒑𝒂𝒔 𝒒𝒖𝒆 ʬɸʬ Shïsûį Dånïęl ʬɸʬ 𝒆𝒔𝒕 𝒍𝒆 𝒃𝒐𝒔𝒔 😇✨✅ 𝒅𝒆 𝒍𝒂 𝒔𝒄𝒊𝒆𝒏𝒄𝒆 𝒆𝒕 𝒕𝒆𝒄𝒉𝒏𝒐𝒍𝒐𝒈𝒊𝒆 !?😸🍀✨🌹");
}
};
