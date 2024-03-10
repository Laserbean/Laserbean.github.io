



document.addEventListener("DOMContentLoaded", function () {
    const mainContent = document.getElementById('main-content');

    // Load content based on the current URL
    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                mainContent.innerHTML = html;
            })
            .catch(error => console.error('Error loading page:', error));
    }

    // Determine which page to load based on the URL
    function determinePage() {
        const path = window.location.pathname;
        if (path.endsWith('page1.html')) {
            loadContent('page1.html');
        } else if (path.endsWith('page2.html')) {
            loadContent('page2.html');
        } else {
            // Default to loading homepage
            loadContent('homepage.html');
        }
    }

    // Load appropriate content when the page loads
    determinePage();
});
