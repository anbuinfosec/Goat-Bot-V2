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
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("𝗦𝗮𝗹𝘂𝘁 𝗯𝗿𝗼 🤵 , 𝒄𝒐𝒎𝒎𝒆𝒏𝒕 𝒕𝒖 𝒗𝒂𝒔? 𝗺𝗼𝗶 𝗰'𝗲𝘀𝘁 Tk Bot👨‍💻 𝒒𝒖'𝒆𝒔 𝒄𝒆 𝒒𝒖𝒆 𝒋𝒆 𝒑𝒆𝒖𝒙 𝒇𝒂𝒊𝒓𝒆 𝒑𝒐𝒖𝒓 𝒕𝒐𝒊 𝒕𝒂𝒑𝒆   -help pour voir ma liste 𝕕𝕖𝕤 𝕔𝕠𝕞𝕞𝕒𝕟𝕕𝕖𝕤👑🤖 ");
}
};