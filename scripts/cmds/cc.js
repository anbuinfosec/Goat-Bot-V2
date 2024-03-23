 module.exports = {
    config: {
        name: "cc",
        version: "1.0",
        author: "TK joel",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
    onStart: async function(){}, 
    onChat: async function({
        event,
        message,
        getLang
    }) {
        if (event.body && event.body.toLowerCase() == "cc") return message.reply("❤‍🔥 𝐶𝑐 𝑡𝑜𝑖😗 ❤‍🔥 𝑒𝑐𝑟𝑖𝑠 #𝑢𝑐ℎ𝑖𝑤𝑎𝑔𝑐 𝑝𝑜𝑢𝑟 𝑟𝑒𝑗𝑜𝑖𝑛𝑑𝑟𝑒 𝑚𝑜𝑛 𝑐𝑙𝑎𝑛😇🔑");
    }
};
