const textarea = document.getElementById('message');

textarea.addEventListener('input', function () {
    this.style.height = 'auto';       // Reset height
    this.style.height = this.scrollHeight + 'px'; // Set new height
});


const menuToggle = document.getElementById('menu-toggle');

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      menuToggle.checked = false;
    }
});