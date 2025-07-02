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
    "IMG_0167.jpg",
    "IMG_0168.jpg",
    "IMG_0169.jpg",
    "IMG_0170.jpg",
    "IMG_0171.jpg",
    "IMG_0172.jpg",
    "IMG_0173.jpg"
  ];

  let index = 0;
  const lawnImage = document.getElementById("lawn-image");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");

  function updateImage() {
    if (lawnImage) lawnImage.src = images[index];
  }

  if (nextButton && prevButton && lawnImage) {
    nextButton.addEventListener("click", () => {
      index = (index + 1) % images.length;
      updateImage();
    });

    prevButton.addEventListener("click", () => {
      index = (index - 1 + images.length) % images.length;
      updateImage();
    });
  }
});
