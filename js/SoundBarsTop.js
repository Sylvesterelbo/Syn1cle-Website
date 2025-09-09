const soundBar = document.getElementById('SoundBar');

function createBars() {
    const width = soundBar.clientWidth;
    const barWidth = 30; // matches CSS width
    const gap = 6;
    const barsCount = Math.floor((width + gap) / (barWidth + gap));

    soundBar.innerHTML = '';

    for (let i = 0; i < barsCount; i++) {
        const img = document.createElement('img');
        img.src = '/images/BarTop.png';
        img.style.height = '100px'; // initial height
        soundBar.appendChild(img);

        animateBar(img); // start animation loop for each bar individually
    }
}

function animateBar(bar) {
    // Random height between min and max
    const minHeight = 20;
    const maxHeight = 500;

    // Random duration between 300ms and 1200ms
    const duration = 300 + Math.random() * 900;

    // Apply duration to transition for this bar
    bar.style.transitionDuration = `${duration}ms`;

    // Set new random height
    const newHeight = minHeight + Math.random() * (maxHeight - minHeight);
    bar.style.height = `${newHeight}px`;

    // Schedule next animation after current duration + a bit of random delay for smoothness
    setTimeout(() => {
        animateBar(bar);
    }, duration + Math.random() * 500);
}

// Initialize bars and animations
createBars();

// Recreate bars on window resize
window.addEventListener('resize', createBars);
