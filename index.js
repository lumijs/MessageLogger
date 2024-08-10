const { Client } = require("discord.js-selfbot-v13");
const client = new Client({ checkUpdate: false });
const { serverWhitelist, saveImages, token } = require("./config.js");
const { getDatabaseForGuild, getDatabaseForDM } = require("./utilities.js");
const { startDashboard } = require("./dashboard/index.js");

client.once("ready", function() {
    console.log(`User is logged in.`);
    startDashboard();
});

client.on("messageDelete", async (m) => {
    let isDM = false;

    if (!m.author) return;
    if (m.author?.bot) return;
    if (m.author.id == client.user.id) return;
    if (m.channelId && !m.guildId) { isDM = true };
    if (m.content == "" && m.attachments.size <= 0) return;

    if (!isDM && serverWhitelist.length > 0) {
        if (!serverWhitelist.includes(m.guildId)) return;
    };

    let savedAttachments = [];
    if (m.attachments.size > 0) {
        m.attachments.forEach(a => {
            if (a.contentType.indexOf("image") !== -1) {
                savedAttachments.push(a.proxyURL);
            };
        });
    };

    let imageReferences = [];
    if (saveImages) {

    };

    let messageObject = {
        content: m.content !== "" ? m.content : null,
        timestamp: Date.now(),
        author: {
            id: m.author.id,
            username: m.author.username,
            globalName: m.author.globalName,
            avatar: m.author.avatar,
        },
        attachments: {
            urls: savedAttachments,
            refs: imageReferences,
        },
    };

    if (isDM) {
        const db = getDatabaseForDM(m.author.id);
        await db.set(`messages.${m.id}`, messageObject);
    } else {
        const db = getDatabaseForGuild(m.guildId);
        await db.set(`messages.${m.id}`, messageObject);
    };

});

client.login(token);