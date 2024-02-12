const axios = require('axios');
const fs = require('fs');

module.exports = {
  config: {
    name: "zom",
    aliases: ["zombie"],
    version: "1.0",
    author: "Deku/WALEX",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Apply aTO  zombie filter to an image URL or a replied image"
    },
    longDescription: {
      en: "Apply a zombie filter to an image URL or a replied image and send the result."
    },
    category: "IMAGE",
    guide: {
      en: ""
    }
  },

  onStart: async function ({ api, event, args }) {
    const imageLink = event.messageReply?.attachments[0]?.url;
    const providedURL = args[0];
    const url = imageLink || providedURL;
    
    if (!url) {
      return api.sendMessage('Please reply to an image or provide an image URL.', event.threadID, event.messageID);
    }

    try {
      api.sendMessage('Generating...', event.threadID, event.messageID);

      const response = await axios.get("https://free-api.ainz-sama101.repl.co/canvas/toZombie", {
        params: { url: encodeURI(url) }
      });

      const result = response.data.result.image_data;
      const imageBuffer = (await axios.get(result, { responseType: "arraybuffer" })).data;

      const filePath = __dirname + "/cache/zombie.png";
      fs.writeFileSync(filePath, Buffer.from(imageBuffer, "utf-8"));

      api.sendMessage({ attachment: fs.createReadStream(filePath) }, event.threadID, () => fs.unlinkSync(filePath), event.messageID);
    } catch (error) {
      console.log(error);
      api.sendMessage('Something went wrong. Please try again.', event.threadID, event.messageID);
    }
  }
};
//converted by P.WALEX API not mine