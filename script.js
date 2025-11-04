// Re-fi Tanzania - Minimalist Glass Morphism Landing Page
// Simple and clean interactions

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initializeBackgroundAnimation();
    initializeButtonEffects();
    initializeKeyboardNavigation();
    
    // Console branding
    console.log('%c🌍 Re-fi Tanzania', 'color: #10b981; font-size: 20px; font-weight: bold;');
    console.log('%cRegenerative Finance Hub', 'color: #34d399; font-size: 12px;');
});

// Background media animation controller
function initializeBackgroundAnimation() {
    const bgVideos = document.querySelectorAll('.bg-video');
    const bgImages = document.querySelectorAll('.bg-image');
    
    // Initialize videos - ensure they start playing
    bgVideos.forEach((video, index) => {
        video.load();
        
        // Force play videos (browser may block autoplay)
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log(`Video ${index + 1} playing`);
            }).catch(error => {
                console.log(`Video ${index + 1} autoplay prevented:`, error);
                // Try playing on user interaction
                document.addEventListener('click', () => {
                    video.play();
                }, { once: true });
            });
        }
        
        // Ensure videos loop smoothly
        video.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
        
        // Handle video loading
        video.addEventListener('loadeddata', function() {
            console.log(`Video ${index + 1} loaded and ready`);
        });
    });
    
    // Preload images for smooth transitions
    bgImages.forEach(img => {
        const imageUrl = getComputedStyle(img).backgroundImage.slice(5, -2);
        if (imageUrl && imageUrl !== 'none') {
            const preloadImg = new Image();
            preloadImg.src = imageUrl;
        }
    });
}

// Enhanced button interactions
function initializeButtonEffects() {
    const links = document.querySelectorAll('.app-link');
    
    links.forEach(link => {
        // Smooth hover interactions
        link.addEventListener('mouseenter', () => {
            link.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        // Touch device support
        link.addEventListener('touchstart', () => {
            link.style.transform = 'translateY(-5px)';
        });
        
        link.addEventListener('touchend', () => {
            link.style.transform = 'translateY(0)';
        });
    });
}

// Keyboard navigation for accessibility
function initializeKeyboardNavigation() {
    const links = Array.from(document.querySelectorAll('.app-link'));
    
    document.addEventListener('keydown', (e) => {
        const currentIndex = links.findIndex(link => link === document.activeElement);
        
        switch(e.key) {
            case 'ArrowRight':
                e.preventDefault();
                if (currentIndex < links.length - 1) {
                    links[currentIndex + 1].focus();
                } else {
                    links[0].focus();
                }
                break;
                
            case 'ArrowLeft':
                e.preventDefault();
                if (currentIndex > 0) {
                    links[currentIndex - 1].focus();
                } else {
                    links[links.length - 1].focus();
                }
                break;
        }
    });
}

// Smooth page transitions (optional enhancement)
function smoothTransition(url) {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

// Performance monitoring (development only)
if (window.performance) {
    window.addEventListener('load', () => {
        const loadTime = window.performance.timing.domContentLoadedEventEnd - 
                        window.performance.timing.navigationStart;
        console.log(`%cPage loaded in ${loadTime}ms`, 'color: #10b981;');
    });
}
