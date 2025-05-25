document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar a');
  const videoContainer = document.getElementById('video-container');
  const mainContent = document.getElementById('main-content');
  const contentSections = document.querySelectorAll('.content-section');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navbar = document.querySelector('.navbar');

  mobileMenuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = link.getAttribute('data-target');

      if (videoContainer) {
        videoContainer.style.display = 'none';
      }

      contentSections.forEach(section => {
        section.classList.remove('show');
        section.style.display = 'none';
      });

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('show');
        targetSection.style.display = 'block';
      }

      navbar.classList.remove('active');
    });
  });
});
