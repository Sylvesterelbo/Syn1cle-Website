document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('navbar');
    if (!container) {
        console.error('Navbar placeholder not found');
        return;
    }

    try {
        const response = await fetch('/elements/navbar.html');
        if (!response.ok) throw new Error('Failed to fetch navbar');

        const html = await response.text();
        container.innerHTML = html;

        const navbarLinks = container.querySelectorAll('a');
        const iframes = document.querySelectorAll('iframe');

        // Remove 'active' from all navbar links
        function clearActive() {
            navbarLinks.forEach(link => link.classList.remove('active'));
        }

        // Function to update active link based on scroll position
        function updateActiveLink() {
            const scrollTop = window.scrollY || window.pageYOffset;

            let activeIndex = 0;

            iframes.forEach((iframe, index) => {
                const offsetTop = iframe.offsetTop;
                if (scrollTop >= offsetTop - 100) {  // -100 for slight offset
                    activeIndex = index;
                }
            });

            clearActive();
            const activeLink = navbarLinks[activeIndex];
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }

        // Initial highlight
        updateActiveLink();

        // Update active link on scroll
        window.addEventListener('scroll', updateActiveLink);

    } catch (error) {
        console.error('Error loading navbar:', error);
    }
});
