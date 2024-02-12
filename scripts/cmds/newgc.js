module.exports = {
config: {
		name: "newbox",
    aliases: ["newgc", "createbox"],
    version: "1.0",
		author: "Samir",
		countDown: 5,
		role: 2,
		shortDescription: "Create a new chat group with the tag",
		longDescription: "Create a new chat group with the tag",
		category: "owner",
		guide: {
      en: '"{pn} [tag] | [New group name] or "{pn} me [tag] | [New group name]"',
    }
	},

 onStart: async function ({ api, event, args, Users }) {
   
 if (args[0] == "me")
  var id = [event.senderID]
  else id = [];
  var main = event.body; 
  var groupTitle = main.slice(main.indexOf("|") +2)
  for (var i = 0; i < Object.keys(event.mentions).length; i++)
id.push(Object.keys(event.mentions)[i]);
  api.createNewGroup(id, groupTitle,() => {api.sendMessage(`Has created a group ${groupTitle} success`, event.threadID)})
 }
};