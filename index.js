builder.defineStreamHandler(function(args) {
    console.log("Richiesta ricevuta per ID:", args.id);

    const streams = [
        {
            title: "Test MP4 Diretto",
            url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        }
    ];

    return Promise.resolve({ streams });
});
