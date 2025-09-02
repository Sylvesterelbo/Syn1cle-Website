window.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll(".floating-letter");
  const bigS = document.getElementById("letter-S");
  const container = document.getElementById("letter-container");
  const flexcontainer = document.querySelector(".flexcontainer");

  let progress = 0;
  let animationComplete = false;

  document.body.style.overflow = "hidden";

  // Add transitions once
  bigS.style.transition = "width 0.5s ease, left 0.5s ease, top 0.5s ease, margin-right 0.5s ease, transform 0.5s ease";
  container.style.transition = "transform 0.5s ease";
  letters.forEach(letter => {
    letter.style.transition = "opacity 0.5s ease";
  });

  function updateAnimation(progress) {
    letters.forEach(letter => {
      letter.style.opacity = progress === 1 ? "1" : "0";
      letter.style.pointerEvents = progress === 1 ? "auto" : "none"; // optionally disable interaction until visible
      letters.forEach(letter => {
  if (letter.id !== 'letter-S') {
    letter.style.transform = "translateX(8vw)";
  }
});

    });

    const startWidth = 25;
    const endWidth = 10;
    const currentWidth = startWidth - (startWidth - endWidth) * progress;
    bigS.style.width = `${currentWidth}vw`;

    // Get bounding rectangles relative to viewport
    const flexRect = flexcontainer.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    // Calculate container left offset relative to flexcontainer left
    const containerOffsetLeft = containerRect.left - flexRect.left;

    const vw = window.innerWidth / 100;
    const marginVw = -8;
    const marginPx = marginVw * vw;

    // Calculate target left inside flexcontainer: containerOffsetLeft + margin + half width of S
    const targetLeftX = containerOffsetLeft + marginPx + (currentWidth * vw) / 2;

    // Flexcontainer center (starting point)
    const flexCenterX = flexRect.width / 2;
    const flexCenterY = flexRect.height / 2;

    // Container vertical center relative to flexcontainer
    const targetCenterY = containerRect.top - flexRect.top + containerRect.height / 2;

    // Interpolate position
    const currentLeft = flexCenterX + (targetLeftX - flexCenterX) * progress;
    const currentTop = flexCenterY + (targetCenterY - flexCenterY) * progress;

if (progress < 1) {
  bigS.style.position = "absolute";
  bigS.style.left = `${currentLeft}px`;
  bigS.style.top = `${currentTop}px`;
  bigS.style.transform = "translate(-50%, -50%)";
  bigS.style.zIndex = 10;
  bigS.style.marginRight = "0";

  container.style.transform = "translateX(-1vw)";
} else {
  // Keep absolute position exactly where the animation ended:
  bigS.style.position = "absolute";
  bigS.style.left = `${targetLeftX}px`;
  bigS.style.top = `${targetCenterY}px`;
  bigS.style.transform = "translate(-50%, -50%)";
  bigS.style.zIndex = 1;
  bigS.style.marginRight = "10vw";

  container.style.transform = "translateX(0)";
  bigS.style.width = `${endWidth}vw`;
  bigS.style.transition = "margin-right 0.5s ease, transform 0.5s ease, width 0.5s ease";
}


  }

  window.addEventListener(
    "wheel",
    (e) => {
      if (animationComplete) return;

      e.preventDefault();

      progress += e.deltaY * 0.0025;
      progress = Math.min(Math.max(progress, 0), 1);

      updateAnimation(progress);

      if (progress === 1) {
        animationComplete = true;
        document.body.style.overflow = "auto";
      }
    },
    { passive: false }
  );

  updateAnimation(0);
});
