// ===========================
// Simple Confetti Animation
// ===========================
function createConfetti() {
  const colors = ['#ff9ecd', '#ffb3d9', '#ff85c0', '#ffc8e8', '#ff6bb5'];
  const confettiCount = 50;
  const container = document.body;

  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
      confetti.style.animationDelay = Math.random() * 0.5 + 's';

      // Random rotation
      const rotation = Math.random() * 360;
      confetti.style.transform = `rotate(${rotation}deg)`;

      // Add custom animation
      const finalPosition = Math.random() * 100 + 100; // Fall between 100-200vh
      const horizontalDrift = (Math.random() - 0.5) * 200; // Drift left or right

      confetti.animate([
        {
          transform: `translateY(0) translateX(0) rotate(${rotation}deg)`,
          opacity: 1
        },
        {
          transform: `translateY(${finalPosition}vh) translateX(${horizontalDrift}px) rotate(${rotation + 360}deg)`,
          opacity: 0
        }
      ], {
        duration: (Math.random() * 3 + 2) * 1000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        fill: 'forwards'
      });

      container.appendChild(confetti);

      // Remove confetti after animation
      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }, i * 30); // Stagger creation
  }
}

// Export for use in final.html
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createConfetti };
}
