// List of Spotify track URLs
const spotifyTracks = [
    "https://open.spotify.com/track/3BiL0YegJTsNi6uHMmg3mr?si=1c7d65d473504784",
"https://open.spotify.com/track/2fiuWGfLUM8HEGIRSFaBRn?si=49ea2480e6d94792",
"https://open.spotify.com/track/2zBnk2kgGLCKSjaHeu0dJE?si=817b46658bbf4260",
"https://open.spotify.com/track/4mIhktxSEC637mIn7yVooC?si=498604ca664647e5",
"https://open.spotify.com/track/6fmX2KA590JLxKZpzJV0nA?si=548f647545de4600",
"https://open.spotify.com/track/6XUJEbLSlNqtzxND2dbDwH?si=90d6d00efb914459",
"https://open.spotify.com/track/0z6fhLulSqj8QviICMMIqD?si=b9a6750c269b459a",
"https://open.spotify.com/track/2I14R0QtJjPF2CuHwaCSwv?si=88456cf85f5d406d"
];

// Grab the container div
const container = document.getElementById('spotify-embeds');
container.style.display = 'flex';
container.style.gap = '20px';
container.style.flexWrap = 'wrap';
container.style.position = 'relative';
container.style.top = '100px';
container.style.width = '90vw';
container.style.margin = '0 auto';
container.style.justifyContent = 'center';





spotifyTracks.forEach(url => {
    // Extract the track ID from URL (the part after "track/")
    const trackId = url.split('/track/')[1].split('?')[0];

    // Create iframe element
    const iframe = document.createElement('iframe');
    iframe.src = `https://open.spotify.com/embed/track/${trackId}`;
    iframe.width = "350";
    iframe.height = "100";
    iframe.frameBorder = "0";
    iframe.allowTransparency = "true";
    iframe.allow = "encrypted-media";
    iframe.Display ="Flex"

    // Add some styling (optional)
    iframe.style.borderRadius = '8px';
    iframe.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';

    // Append iframe to container
    container.appendChild(iframe);
});
