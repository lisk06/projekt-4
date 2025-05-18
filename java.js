document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar a');
    const videoContainer = document.getElementById('video-container');
    const mainContent = document.getElementById('main-content');
    const contentSections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = link.getAttribute('data-target');

            // Hide video and fade in the selected content
            videoContainer.style.display = 'none';
            
            // Hide all sections initially
            contentSections.forEach(section => {
                section.classList.remove('show'); // Remove 'show' class to hide the section
                section.style.display = 'none'; // Ensure the section is hidden
            });

            // Check and display the clicked section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('show'); // Add 'show' class to fade in the content
                targetSection.style.display = 'block'; // Display the section
            }
        });
    });
});
