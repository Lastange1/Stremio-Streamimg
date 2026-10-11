builder.defineStreamHandler(function(args) {
    console.log("Richiesta ricevuta per ID:", args.id);

    const streams = [
        {
            title: "Test Video MP4",
            url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
        }
    ];

    return Promise.resolve({ streams });
});
