module.exports = {
  config: {
    name: "confess",
    aliases: ["confess"],
    version: "1.1",
    author: "Jmlabaco & Xicz Latte",
    countDown: 5,
    role: 2,
    shortDescription: "Send a confession message to a specific thread.",
    longDescription: "Send a confession message anonymously or openly to someone special using their thread ID.",
    category: "Anon",
    guide: "Usage: {p}confess <thread-id> | <message>",
  },
  onStart: async function ({ api, event, args }) {
    if (args.length < 2) {
      api.sendMessage("Invalid format. Use: confess <thread/uid> | <message>", event.threadID, event.messageID);
      return;
    }

    const [threadID, confession] = args.join(" ").split(" | ");

    if (!confession || !threadID) {
      api.sendMessage("Invalid format. Use: {p}confess <thread/uid> | <message>", event.threadID, event.messageID);
      return;
    }

    const confessionMessage = `
   ─────── ⋆⋅☆⋅⋆ ───────         𝕸𝖊𝖘𝖘𝖆𝖌𝖊𝖘 𝖘𝖕𝖊́𝖈𝖎𝖆𝖑𝖊 𝖚𝖓𝖎𝖖𝖚𝖊𝖒𝖊𝖓𝖙 𝖕𝖔𝖚𝖗 𝖛𝖔𝖚𝖘 🫵
---------------------------------------------
📬ُ 𝖉𝖊 𝖑𝖆 𝖕𝖆𝖗𝖙 𝖉𝖊 𝖑' 𝖆𝖉𝖒𝖎𝖓 
─────── ⋆⋅☆⋅⋆ ───────
            ⤿ ${confession.trim()}
    `;

    api.sendMessage(confessionMessage, threadID, () => {
      const successMessage = `Successfully Sent To (${threadID})\n\nYou Sent: ${confession.trim()}`;
      api.sendMessage(successMessage, event.threadID);
    });
  }
};