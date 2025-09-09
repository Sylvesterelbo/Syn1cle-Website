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
        "https://open.spotify.com/track/6hAedDfIOC04CzgpbGtuNM?si=5190917c1bb24a27"
    ];

    const container = document.getElementById('spotify-embeds');

    if (!container) {
        console.error("Container with id 'spotify-embeds' not found!");
        return;
    }

    spotifyTracks.forEach(url => {
        const trackId = url.split('/track/')[1].split('?')[0];

        const iframe = document.createElement('iframe');
        iframe.src = `https://open.spotify.com/embed/track/${trackId}`;
        iframe.frameBorder = "0";
        iframe.allowTransparency = "true";
        iframe.allow = "encrypted-media";

        container.appendChild(iframe);
    });
});
