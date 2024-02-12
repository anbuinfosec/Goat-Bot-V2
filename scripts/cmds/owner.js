module.exports = {
  config: {
    name: "owner",
    aliases: [],
    version: "1.0",
    author: "Elohime Hatake",
    cooldown: 5,
    role: 0,
    shortDescription: {
      en: "Owner Command - Only bot admins can use it",
      tl: "Command ng Owner - Maaari lamang gamitin ng bot admins"
    },
    longDescription: {
      en: "Owner Command - Only bot admins can use it",
      tl: "Command ng Owner - Maaari lamang gamitin ng bot admins"
    },
    category: "goatBot",
    guide: {
      en: "{p}owner",
      tl: "{p}owner"
    }
  },

  onStart: async function ({ event, message, threadsData, usersData, api, commandName, role }) {
    // Get the owner's ID from the config file or wherever it's stored
    const ownerId = "100079402482429";

    // Check if the sender is the owner
    if (event.senderID === ownerId) {
      message.reply("👑|🧎‍♂ 𝐏𝐫𝐨𝐬𝐭𝐞𝐫𝐧𝐞𝐳 𝐯𝐨𝐮𝐬 𝐝𝐞𝐯𝐚𝐧𝐭 𝐥𝐞 𝐑𝐨𝐢 🤴 . 𝐌𝐚î𝐭𝐫𝐞 𝐣𝐞 𝐯𝐨𝐮𝐬 𝐥𝐞𝐜𝐡𝐞𝐫𝐞𝐳 𝐥𝐞𝐬 𝐩𝐢𝐞𝐝𝐬 𝐬𝐢 𝐥𝐞 𝐟𝐚𝐮𝐭 🫧.");
    } else {
      message.reply("❌| 😈𝕻𝖆𝖚𝖛𝖗𝖊 𝖋𝖔𝖚 𝖙𝖚 𝖓' 𝖊𝖘𝖙 𝖕𝖆𝖘 𝖊𝖓𝖈𝖔𝖗𝖊 𝖕𝖚𝖎𝖘𝖘𝖆𝖓𝖙 𝖈𝖔𝖒𝖒𝖊 𝖒𝖔𝖓 𝖒𝖆𝖎𝖙𝖗𝖊 𝖕𝖔𝖚𝖗 𝖒𝖊 𝖈𝖔𝖓𝖙𝖗𝖔̂𝖑𝖊𝖗 𝕰𝖘𝖑𝖆𝖛𝖊🖕.");
    }
  },

  // Other functions like onChat, onReply, and their respective logics go here
};