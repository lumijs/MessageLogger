const { QuickDB } = require('quick.db');
const fs = require("fs");

function getDatabaseForGuild(guildId) {
    return new QuickDB({
        filePath: `./databases/guilds/${guildId}.sqlite`
    });
};

function getDatabaseForDM(userId) {
    return new QuickDB({
        filePath: `./databases/dms/${userId}.sqlite`
    });
};

async function getGuildMessages(guildId) {
    if (!fs.existsSync(`./databases/guilds/${guildId}.sqlite`)) {
        return {};
    };

    const db = getDatabaseForGuild(guildId);
    const messages = await db.get("messages");
    return messages || {};
};

async function getDMMessages(userId) {
    if (!fs.existsSync(`./databases/dms/${userId}.sqlite`)) {
        return {};
    };
    
    const db = getDatabaseForDM(userId);
    const messages = await db.get("messages");
    return messages || {};
};


module.exports = { getDatabaseForGuild, getDatabaseForDM, getGuildMessages, getDMMessages };