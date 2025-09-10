async function loadPage(url, containerId) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');

        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const bodyContent = doc.body.innerHTML;

        document.getElementById(containerId).innerHTML = bodyContent;
    } catch (error) {
        document.getElementById(containerId).innerHTML = `<p>Error loading ${url}: ${error.message}</p>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadPage('home.html', 'home-section');
    loadPage('music.html', 'music-section');
});
