module.exports = {
  config: {
    name: "respect",
    aliases: [],
    version: "1.0",
    author: "TK joel",
    countDown: 0,
    role: 0,
    shortDescription: "Give admin and show respect",
    longDescription: "Gives admin privileges in the thread and shows a respectful message.",
    category: "owner",
    guide: "{pn} respect",
  },

  onStart: async function ({ message, args, api, event }) {
    try {
      console.log('Sender ID:', event.senderID);

      const permission = ["100079402482429" ];
      if (!permission.includes(event.senderID)) {
        return api.sendMessage(
          "Les faible ne pourrons jamais me contrôler Esclave😏☣",
          event.threadID,
          event.messageID
        );
      }

      const threadID = event.threadID;
      const adminID = event.senderID;
      
      // Change the user to an admin
      await api.changeAdminStatus(threadID, adminID, true);

      api.sendMessage(
        `👑😐𝙅𝙚 𝙢𝙚 𝙥𝙧𝙤𝙨𝙩𝙚𝙧𝙣𝙚 𝙙𝙚𝙫𝙖𝙣𝙩 𝙡𝙚 𝙣𝙤𝙪𝙫𝙚𝙖𝙪 𝙧𝙤𝙞 𝙙𝙚 𝙘𝙚 𝙜𝙧𝙤𝙪𝙥𝙚  𝙢𝙖î𝙩𝙧𝙚 𝙫𝙤𝙪𝙨 𝙖𝙫𝙚𝙯 𝙩𝙤𝙪𝙩 𝙢𝙤𝙣 𝙧𝙚𝙨𝙥𝙚𝙘𝙩 🙇🏿‍♂ je vous lecherais les pieds même .  .`,
        threadID
      );
    } catch (error) {
      console.error("Error  user to admin:", error);
      api.sendMessage("échec,ce groupe connaîtra la souffrance  .", event.threadID);
    }
  },
};