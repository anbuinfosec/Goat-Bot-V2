 const axios = require('axios');

const Prefixes = [
  'Shisui', 
  'ai'
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "Shïsûį",
    longDescription: "AI", 
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("𝐘𝐨 𝐦𝐞𝐜👋🍀✨ 𝐦𝐨𝐢 𝐜'𝐞𝐬𝐭 𝐒𝐡𝐢𝐬𝐮𝐢 𝐚𝐠𝐞𝐧𝐭 𝐝𝐞 𝐩𝐨𝐥𝐢𝐜𝐞👮🍀✨👮 𝐪𝐮𝐞𝐥 𝐞𝐬𝐭 𝐥𝐞 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐞!?🛂💡🍀");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `𝐒𝐇𝐈𝐒𝐔𝐈 🍀
━━━━━━━━━━━━━        
${𝒂𝒏𝒔𝒘𝒆𝒓}
━━━━━━━━━━━━━`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
}
