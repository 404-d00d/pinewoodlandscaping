window.addEventListener('beforeunload', () => {
  console.log("Page is being refreshed or navigated away.");
});

document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById('message');
  if (textarea) {
    textarea.addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = this.scrollHeight + 'px';
    });
  }

  const menuToggle = document.getElementById('menu-toggle');
  if (menuToggle) {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        menuToggle.checked = false;
      }
    });
  }

  const images = [
  { type: 'single', src: 'IMG_0167.jpg' },
  { type: 'single', src: 'IMG_0168.jpg' },
  { type: 'single', src: 'IMG_0169.jpg' },
  { type: 'single', src: 'IMG_0170.jpg' },
  { type: 'single', src: 'IMG_0171.jpg' },
  { type: 'single', src: 'IMG_0172.jpg' },
  { type: 'single', src: 'IMG_0173.jpg' }
  ];

  images.forEach(entry => {
  if (entry.type === 'single') {
    const img = new Image();
    img.src = entry.src;
  } else if (entry.type === 'pair') {
    const before = new Image();
    const after = new Image();
    before.src = entry.before;
    after.src = entry.after;
  }
});

  let index = 0;
  const lawnImage = document.getElementById("lawn-image");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");

const container = document.getElementById("lawn-image-container");

function updateImage() {
  if (!container) return;

  const entry = images[index];

  // Fade out current image(s)
  const currentImages = container.querySelectorAll('img');
  currentImages.forEach(img => img.classList.add('fade-out'));

  setTimeout(() => {
    container.innerHTML = ''; // Only clear after fade-out

    if (entry.type === 'single') {
      const img = document.createElement('img');
      img.src = entry.src;
      img.alt = 'Lawn Image';
      img.className = 'carousel-image';

      // ✅ Add fade-in behavior
      img.onload = () => {
        img.classList.add('loaded');
      };

      container.appendChild(img);
    } else if (entry.type === 'pair') {
      const before = document.createElement('img');
      const after = document.createElement('img');

      before.src = entry.before;
      after.src = entry.after;

      before.alt = 'Before';
      after.alt = 'After';

      before.className = 'carousel-image half';
      after.className = 'carousel-image half';

      // ✅ Fade-in when loaded
      before.onload = () => before.classList.add('loaded');
      after.onload = () => after.classList.add('loaded');

      container.appendChild(before);
      container.appendChild(after);
    }
  }, 300); // Match fade-out duration
}


nextButton.setAttribute("type", "button");
prevButton.setAttribute("type", "button");


  if (nextButton && prevButton && container) {
    nextButton.addEventListener("click", (e) => {
      e.preventDefault();
      index = (index + 1) % images.length;
      updateImage();
      return false; // <- also stops bubbling in many edge cases
    });

    prevButton.addEventListener("click", (e) => {
      e.preventDefault();
      index = (index - 1 + images.length) % images.length;
      updateImage();
      return false; // <- prevents fallback refresh behavior
    });
  }
    updateImage();
});
