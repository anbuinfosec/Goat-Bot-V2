module.exports = {
  config: {
    name: "join",
    aliases: ['addme', 'joinme'],
    version: "1.0",
    author: "joel",
    countDown: 5,
    role: 2,
    shortDescription: {
      en: "Add user to support group",
    },
    longDescription: {
      en: "This command adds the user to the group where bot exist",
    },
    category: "owner",
    guide: {
      en: "To use this command, simply type !join <threadID>.",
    },
  },

  onStart: async function ({ api, args, message, event }) {
    const supportGroupId = args[0];
    if (!supportGroupId) {
      api.sendMessage("Please provide the support group ID.", event.threadID);
      return;
    }
    const threadID = event.threadID;
    const userID = event.senderID;
    const threadInfo = await api.getThreadInfo(supportGroupId);
    const participantIDs = threadInfo.participantIDs;
    if (participantIDs.includes(userID)) {
      api.sendMessage(
        "🧑‍💻 | 👑𝐌𝐚𝐢̂𝐭𝐫𝐞 𝐣𝐞 𝐯𝐨𝐮𝐬 𝐞𝐬𝐭 𝐝𝐞́𝐣𝐚̀ 𝐚𝐣𝐨𝐮𝐭𝐞𝐳 𝐚̀ 𝐜𝐞 𝐠𝐫𝐨𝐮𝐩𝐞 🧑‍🔧🔐.🔎... 𝐕𝐞𝐢𝐥𝐥𝐞𝐳 𝐯𝐞́𝐫𝐢𝐟𝐢𝐞𝐫 𝐯𝐨𝐬 𝐝𝐞𝐦𝐚𝐧𝐝𝐞 𝐝𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐨𝐮 𝐯𝐨𝐭𝐫𝐞 𝐛𝐨𝐢̂𝐭𝐞 𝐝𝐞 𝐬𝐩𝐚𝐦☠️.",
        threadID
      );
    } else {
      api.addUserToGroup(userID, supportGroupId, (err) => {
        if (err) {
          console.error("Failed to add user to support group:", err);
          api.sendMessage("❌| 👑𝐌𝐚𝐢̂𝐭𝐫𝐞 𝐣𝐞 𝐧' 𝐞𝐬 𝐩𝐚𝐬 𝐩𝐮̂ 𝐯𝐨𝐮𝐬 𝐚𝐣𝐨𝐮𝐭𝐞𝐳 𝐚̀ 𝐜𝐞 𝐠𝐫𝐨𝐮𝐩𝐞 🧑‍🔧🔒. 𝐄𝐫𝐫𝐞𝐮𝐫 𝐝𝐮 𝐚̀ 𝐯𝐨𝐭𝐫𝐞 𝐈𝐃 𝐨𝐮 𝐚̀ 𝐥' 𝐞𝐱𝐜𝐞̀𝐬 𝐝𝐞 𝐦𝐞𝐦𝐛𝐫𝐞𝐬 𝐝𝐚𝐧𝐬 𝐥𝐞 𝐠𝐫𝐨𝐮𝐩𝐞 , 🧑‍💻..𝐯𝐞𝐮𝐢𝐥𝐥𝐞𝐳 𝐯𝐞́𝐫𝐢𝐟𝐢𝐞𝐫 𝐯𝐨𝐭𝐫𝐞 𝐜𝐨𝐦𝐩𝐭𝐞 𝐞𝐭 𝐫𝐞́𝐞𝐬𝐬𝐚𝐲𝐞𝐫 𝐚̀ 𝐧𝐨𝐮𝐯𝐞𝐚𝐮 🙇‍♂️.", threadID);
        } else {
          api.sendMessage(
            "✅| 👑𝐌𝐚𝐢̂𝐭𝐫𝐞 𝐕𝐨𝐮𝐬 𝐚𝐯𝐞𝐳 𝐞́𝐭𝐞́ 𝐚𝐣𝐨𝐮𝐭𝐞́ 𝐚̀ 𝐜𝐞 𝐠𝐫𝐨𝐮𝐩𝐞 🎊🔓. 𝐒𝐢 𝐯𝐨𝐮𝐬 𝐧'𝐚𝐯𝐞𝐳 𝐩𝐚𝐬 𝐭𝐫𝐨𝐮𝐯𝐞́ 𝐥𝐞 𝐠𝐫𝐨𝐮𝐩𝐞  𝐝𝐚𝐧𝐬 𝐯𝐨𝐭𝐫𝐞 𝐛𝐨𝐢̂𝐭𝐞 𝐝𝐞 𝐫𝐞́𝐜𝐞𝐩𝐭𝐢𝐨𝐧, 🔎..𝐯𝐞𝐮𝐢𝐥𝐥𝐞𝐳 𝐯𝐞́𝐫𝐢𝐟𝐢𝐞𝐫 𝐯𝐨𝐬 𝐝𝐞𝐦𝐚𝐧𝐝𝐞𝐬 𝐝𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞𝐬 𝐨𝐮 𝐯𝐨𝐭𝐫𝐞 𝐛𝐨𝐢̂𝐭𝐞 𝐝𝐞 𝐬𝐩𝐚𝐦☠️.",
            threadID
          );
        }
      });
    }
  },
};