// JavaScript for moving text based on mouse position
document.addEventListener('mousemove', (event) => {
    const movingText = document.querySelector('.moving-text');
    const x = event.clientX;
    const y = event.clientY;
    movingText.style.left = x + 'px';
    movingText.style.top = y + 'px';
  });
  