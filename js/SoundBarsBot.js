const soundBar = document.getElementById('SoundBar');

function createBars() {
    const width = soundBar.clientWidth;
    const barWidth = 30;
    const gap = 6;
    const barsCount = Math.floor((width + gap) / (barWidth + gap));

    soundBar.innerHTML = '';

    for (let i = 0; i < barsCount; i++) {
        const img = document.createElement('img');
        img.src = '/images/BarBot.png';
        img.style.height = '100px';
        soundBar.appendChild(img);

        animateBar(img);
    }
}

function animateBar(bar) {
    const minHeight = 20;
    const maxHeight = 500;

    const duration = 300 + Math.random() * 900;

    bar.style.transitionDuration = `${duration}ms`;

    const newHeight = minHeight + Math.random() * (maxHeight - minHeight);
    bar.style.height = `${newHeight}px`;

    setTimeout(() => {
        animateBar(bar);
    }, duration + Math.random() * 500);
}

createBars();


window.addEventListener('resize', createBars);
