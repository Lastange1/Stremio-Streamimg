const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");

const builder = new addonBuilder({
    id: "org.mycustomaddon",
    version: "1.0.0",
    name: "Mio Addon Personale",
    description: "Add-on custom ospitato nel cloud",
    resources: ["stream"],
    types: ["movie", "series"],
    idPrefixes: ["tt"],
    catalogs: []
});

builder.defineStreamHandler((args) => {
    // Qui aggiungeremo la tua logica dei link
    return Promise.resolve({ streams: [] });
});

const port = process.env.PORT || 7000;
serveHTTP(builder.getInterface(), { port: port });
