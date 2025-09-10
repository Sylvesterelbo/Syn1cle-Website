const overlay = document.getElementById('loading-overlay');
const equalizer = document.getElementById('equalizer');
const barCount = 7;


for (let i = 0; i < barCount; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.animationDelay = `${i * 0.15}s`;
    equalizer.appendChild(bar);
}


window.addEventListener('load', () => {
    overlay.style.transition = 'opacity 0.5s ease';
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500);
});

