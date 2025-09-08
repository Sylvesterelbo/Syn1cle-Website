document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('media');
    if (!container) {
        console.error('Navbar placeholder not found');
        return;
    }

    try {
        const response = await fetch('/elements/media.html');
        if (!response.ok) throw new Error('Failed to fetch navbar');

        const html = await response.text();
        container.innerHTML = html;

        // After navbar is loaded, highlight the active link
        const navbarLinks = container.querySelectorAll('a');
        const currentPath = window.location.pathname;

        navbarLinks.forEach(link => {
            link.classList.remove('active');

            // Exact match on href attribute and current path
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });

    } catch (error) {
        console.error('Error loading navbar:', error);
    }
});
