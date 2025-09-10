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


        const navbarLinks = container.querySelectorAll('a');
        const currentPath = window.location.pathname;

        navbarLinks.forEach(link => {
            link.classList.remove('active');


            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });

    } catch (error) {
        console.error('Error loading navbar:', error);
    }
});
