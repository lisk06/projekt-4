document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navbar a');
    const videoContainer = document.getElementById('video-container');
    const contentSections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = link.getAttribute('data-target');

            // Hide video and fade in the selected content
            videoContainer.style.display = 'none';
            contentSections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('show'); // Fade in the content
                } else {
                    section.classList.remove('show'); // Hide other sections
                }
            });
        });
    });
});
