const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "nemogc",
    aliases: ["tempestgc"],
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "add user in thread"
    },
    longDescription: {
      vi: "",
      en: "add any user to bot owner group chat"
    },
    category: "chat box",
    guide: {
      en: "{pn}teragc"
    }
  },

  onStart: async function ({ api, event, args }) {
    const threadID = "";

    try {
      // Check if the user is already in the group chat
      const threadInfo = await api.getThreadInfo(threadID);
      const participants = threadInfo.participantIDs;

      if (participants.includes(event.senderID)) {
        api.sendMessage("⚠ | t'es déjà dans le groupe de mon kazu chéri.", event.threadID);

        // Set ⚠ reaction for already  user
        api.setMessageReaction("⚠", event.messageID, "🤧", api);
      } else {
        // If not, add the user to the group chat
        await api.addUserToGroup(event.senderID, threadID);
        api.sendMessage("✅ | t'as été ajouté au groupe de Kazu × tsiaro.", event.threadID);

        // Set ✅ reaction for successfully added user
        api.setMessageReaction("✅", event.messageID, "🤧", api);
      }
    } catch (error) {
      api.sendMessage("❌ | Failed to add you to the group chat.\ough the link:", event.threadID);

      // Set ❌ reaction for failed adding user
      api.setMessageReaction("❌", event.messageID, "🤧", api);
    }
  }
};