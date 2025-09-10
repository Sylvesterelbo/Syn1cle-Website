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


        function clearActive() {
            navbarLinks.forEach(link => link.classList.remove('active'));
        }


        function updateActiveLink() {
            const scrollTop = window.scrollY || window.pageYOffset;

            let activeIndex = 0;

            iframes.forEach((iframe, index) => {
                const offsetTop = iframe.offsetTop;
                if (scrollTop >= offsetTop - 100) {
                    activeIndex = index;
                }
            });

            clearActive();
            const activeLink = navbarLinks[activeIndex];
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }

        navbarLinks.forEach((link, index) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();

                const targetIframe = iframes[index];
                if (targetIframe) {
                    window.scrollTo({
                        top: targetIframe.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });


        updateActiveLink();

        window.addEventListener('scroll', updateActiveLink);

    } catch (error) {
        console.error('Error loading navbar:', error);
    }
});
