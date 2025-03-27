const scrollingContainer = document.querySelector('.scrolling-container');
const scrollingContent = document.querySelector('.scrolling-content');

let isDragging = false;
let startX;
let scrollLeft;

scrollingContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  scrollingContainer.classList.add('active');
  startX = e.pageX - scrollingContainer.offsetLeft;
  scrollLeft = scrollingContainer.scrollLeft;
});

scrollingContainer.addEventListener('mouseleave', () => {
  isDragging = false;
  scrollingContainer.classList.remove('active');
});

scrollingContainer.addEventListener('mouseup', () => {
  isDragging = false;
  scrollingContainer.classList.remove('active');
});

scrollingContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - scrollingContainer.offsetLeft;
  const walk = (x - startX) * 2; // Adjust scroll speed
  scrollingContainer.scrollLeft = scrollLeft - walk;
});
