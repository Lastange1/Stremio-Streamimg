const { addonBuilder, serveHTTP } = require("stremio-addon-sdk");

const builder = new addonBuilder({
    id: "org.streamingaddon",
    version: "1.0.0",
    name: "Mio Addon Personale",
    description: "Add-on custom per flussi di streaming",
    resources: ["stream"],
    types: ["movie", "series"],
    idPrefixes: ["tt"],
    catalogs: []
});

builder.defineStreamHandler(function(args) {
    console.log("Richiesta ricevuta per ID:", args.id);

    // Qui puoi definire i link dei video o degli streaming che vuoi far apparire
    const streams = [
        {
            title: "Streaming Principale",
            url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
    ];

    return Promise.resolve({ streams });
});

const port = process.env.PORT || 7000;
serveHTTP(builder.getInterface(), { port: port });
