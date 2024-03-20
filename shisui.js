 module.exports = {
  config: {
    name: "shisui",
    version: "1.0",
    author: "Jaychris Garcia",
    countDown: 5,
    role: 0,
    shortDescription: "no prefix",
    longDescription: "no prefix",
    category: "no prefix",
  },
  onStart: async function(){},
  onChat: async function({ event, message, getLang }) {
    if (event.body && event.body.toLowerCase() === "shisui") {
      return message.reply({
        body: "🍀 ʬɸʬ Shïsûį Dånïęl ʬɸʬ 🍀 https://www.facebook.com/profile.php?id=100090405019929",
        attachment: await global.utils.getStreamFromURL("https://i.ibb.co/Sv8zL69/image.jpg")
      });
    }
  }
  
