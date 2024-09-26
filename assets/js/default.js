//Auto setting of : target="_blank", rel="noopener noreferrer" when link is external
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.hostname !== window.location.hostname) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        }
    });
})

// MutationObserver to hide contents when search results are displayed
document.addEventListener('DOMContentLoaded', () => {
    const searchResult = document.getElementById('search-results');
    
    const searchResultWrapper = document.getElementById('search-results-wrapper');
    const breadCrumbs = document.getElementById('breadcrumbs');
    const mainContent = document.getElementById('main-content');
    const tocWrapper = document.getElementById('sidebar-toc');

    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                mainContent.classList.add('hidden');
                breadCrumbs.classList.add('hidden');
                tocWrapper.classList.add('hidden');
                searchResultWrapper.classList.remove('hidden');
            } else if (mutation.type === 'childList' && mutation.removedNodes.length > 0 && searchResult.children.length === 0) {
                mainContent.classList.remove('hidden');
                breadCrumbs.classList.remove('hidden');
                tocWrapper.classList.remove('hidden');
                searchResultWrapper.classList.add('hidden');               
            }
        }
    });
    observer.observe(searchResult, { childList: true });
})

//Scroll to top
const scrollToTopBtn = document.getElementById("btn-scroll-top");
window.addEventListener("scroll", function() {
    if (document.documentElement.scrollHeight > window.innerHeight && (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)) {
        scrollToTopBtn.style.display = "block"; // Afficher le bouton
    } else {
        scrollToTopBtn.style.display = "none"; // Cacher le bouton
    }
});
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Défilement fluide vers le haut
    });
});