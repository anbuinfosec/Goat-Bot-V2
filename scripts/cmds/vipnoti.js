module.exports = {
  config: {
    name: "vipnoti",
    version: "1.0",
    author: "VIP",
    role: 0,
    shortDescription: { en: "Send a VIP notification to a user." },
    longDescription: { en: "Send a VIP notification to a user with custom content." },
    category: "VIP",
    guide: { en: "{pn} <uid/destination> <notification content> - Send a VIP notification to a user." },
  },
  onStart: async function ({}) {},
  
  onVIP: async function({ api, args, event, usersData, message }) {
    if (args.length < 2) {
      message.reply("Usage: /vipnoti <uid/destination> <notification content>");
      return;
    }

    const destination = args[1];
    const notificationContent = args.slice(2).join(" ");

    try {
      // Get the name of the destination user
      const userData = await usersData.get(destination);
      const destinationName = userData ? userData.name : "Unknown User";
      const senderData = await usersData.get(event.senderID);
      const senderName = senderData ? senderData.name : "Unknown User";

      // Send the VIP notification
      api.sendMessage(`𝗠𝗲𝘀𝘀𝗮𝗴𝗲 𝗳𝗿𝗼𝗺 𝗩𝗜𝗣 𝗨𝘀𝗲𝗿:
From: ${senderName}
Content: ${notificationContent}
      
(Do not reply to this message)`, destination);

      // Send a success message
      message.reply(`VIP notification sent to ${destinationName}: 
From: ${senderName}
Content: ${notificationContent}`);
    } catch (error) {
      console.error("Error sending VIP notification:", error);
      message.reply("Failed to send VIP notification. Please try again later.");
    }
  }
};