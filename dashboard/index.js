const config = require("../config.js");
const express = require('express')
const app = express()
const path = require("path");
const { getGuildMessages, getDMMessages } = require("../utilities.js");


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './templates/main.html'));
});

app.get("/guild/:id", async (req, res) => {
    const guild = req.params.id;
    
    let messages = await getGuildMessages(guild);

    res.json(messages);
});

app.get("/dm/:id", async (req, res) => {
    const dm = req.params.id;
    
    let messages = await getDMMessages(dm);

    res.json(messages);
});


async function startDashboard() {
    app.listen(config.dashboard.port, () => {
        console.log(`Dashboard available at http://localhost:${config.dashboard.port}`);
    });      
};

module.exports = { startDashboard };
