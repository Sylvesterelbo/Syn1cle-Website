window.addEventListener("DOMContentLoaded", () => {
  const letters = Array.from(document.querySelectorAll(".floating-letter"));
  const container = document.getElementById("letter-container");
  const bigS = document.getElementById("letter-S"); // NEW
  const flexcontainer = document.querySelector(".flexcontainer");

  let progress = 0;
  let animationComplete = false;
  let hasStartedAnimation = false;

  document.body.style.overflow = "hidden";

  // Initialize styles for floating letters
  letters.forEach(letter => {
    letter.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    letter.style.opacity = 0;
  });

  container.style.transition = "transform 0.5s ease";

  function updateAnimation(progress) {
    letters.forEach((letter, i) => {
      const fromLeft = i % 2 === 0; // even index from left, odd from right
      const distanceVw = 15;

      letter.style.opacity = progress;
      letter.style.pointerEvents = progress === 1 ? "auto" : "none";

      const translateX = fromLeft
        ? (1 - progress) * -distanceVw
        : (1 - progress) * distanceVw;

      letter.style.transform = `translateX(${translateX}vw)`;
    });

    container.style.transform = `translateX(${(1 - progress) * -1}vw)`;
  }

  function animateAllInOneGo() {
    const duration = 1200; // ms
    const startTime = performance.now();
    const initialProgress = progress;

    // Fade out the big S when animation starts
    bigS.style.transition = "opacity 0.5s ease";
    bigS.style.opacity = 0;

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      let t = Math.min(elapsed / duration, 1);

      // Ease in-out quad smoothing
      t = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      progress = initialProgress + (1 - initialProgress) * t;
      updateAnimation(progress);

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        animationComplete = true;
        progress = 1;
        updateAnimation(progress);
        document.body.style.overflow = "hidden";

        // Hide big S completely after fade out transition ends
        bigS.style.display = "none";
      }
    }

    requestAnimationFrame(step);
  }

  window.addEventListener(
    "wheel",
    (e) => {
      if (animationComplete || hasStartedAnimation) return;

      if (e.deltaY > 0) {
        hasStartedAnimation = true;
        e.preventDefault();
        animateAllInOneGo();
      }
    },
    { passive: false }
  );

  // Start with all letters hidden and off-screen
  updateAnimation(0);
});
