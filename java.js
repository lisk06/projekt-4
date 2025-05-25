document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.navbar a');
  const videoContainer = document.getElementById('video-container');
  const mainContent = document.getElementById('main-content');
  const contentSections = document.querySelectorAll('.content-section');
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navbar = document.querySelector('.navbar');

  // Mobile menu toggle behavior
  mobileMenuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

<<<<<<< HEAD
  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = link.getAttribute('data-target');

      // Hide video
      if (videoContainer) {
        videoContainer.style.display = 'none';
      }

      // Hide all content sections
      contentSections.forEach(section => {
        section.classList.remove('show');
        section.style.display = 'none';
      });

      // Show the selected section
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('show');
        targetSection.style.display = 'block';
      }

      // Close mobile menu after selection
      navbar.classList.remove('active');
=======
            videoContainer.style.display = 'none';
            
            contentSections.forEach(section => {
                section.classList.remove('show'); 
                section.style.display = 'none'; 
            });

           
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('show');
                targetSection.style.display = 'block'; 
            }
        });
>>>>>>> 2b64b7b2788b6595bfe9ee6a28c7188c47bafc48
    });
  });
});
