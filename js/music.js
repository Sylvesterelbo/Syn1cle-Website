document.addEventListener('DOMContentLoaded', () => {
    const spotifyTracks = [
        "https://open.spotify.com/track/3BiL0YegJTsNi6uHMmg3mr?si=1c7d65d473504784",
        "https://open.spotify.com/track/2fiuWGfLUM8HEGIRSFaBRn?si=49ea2480e6d94792",
        "https://open.spotify.com/track/2zBnk2kgGLCKSjaHeu0dJE?si=817b46658bbf4260",
        "https://open.spotify.com/track/4mIhktxSEC637mIn7yVooC?si=498604ca664647e5",
        "https://open.spotify.com/track/6fmX2KA590JLxKZpzJV0nA?si=548f647545de4600",
        "https://open.spotify.com/track/6XUJEbLSlNqtzxND2dbDwH?si=90d6d00efb914459",
        "https://open.spotify.com/track/0z6fhLulSqj8QviICMMIqD?si=b9a6750c269b459",
        "https://open.spotify.com/track/2I14R0QtJjPF2CuHwaCSwv?si=88456cf85f5d406d",
        "https://open.spotify.com/track/6hAedDfIOC04CzgpbGtuNM?si=5190917c1bb24a27",
        "https://open.spotify.com/track/4MVWtWdWHNeEbPtCLSiyDy?si=a6394f889ca84e73",
        "https://open.spotify.com/track/5opsbyEPMs1e0arisuLEW5?si=b7d37e6ba1274609",
        "https://open.spotify.com/track/5Wghn5vglIH1vXfkP1QPU6?si=72df60b728ae4a56",
        "https://open.spotify.com/track/5upCn7u8ZHYiN2pt3kcEDv?si=1b2f05ef953e495f"
    ];

    const container = document.getElementById('spotify-embeds');

    if (!container) {
        console.error("Container with id 'spotify-embeds' not found!");
        return;
    }

    spotifyTracks.forEach(url => {
        const trackId = url.split('/track/')[1].split('?')[0];

        const iframe = document.createElement('iframe');
        iframe.src = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;
        iframe.frameBorder = "0";
        iframe.allowTransparency = "true";
        iframe.allow = "encrypted-media";

        container.appendChild(iframe);
    });
});
