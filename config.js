const config = {
    /*
    If left blank, all servers will have their deleted messages logged.
    To add servers to whitelist populate this array with their ids like so:

    serverWhitelist: ["ServerID", "ServerID"],
    */
    serverWhitelist: [],

    // Not yet implemented.
    saveImages: true,

    // Your user token.
    token: "",

    dashboard: {
        // The port the dashboard will run on.
        port: 3000,
    },
};

module.exports = config;