document.addEventListener('DOMContentLoaded', () => {
    // Scroll animations using Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it has become visible
                // obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select all elements with the fade-in-up class
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Button micro-interaction
    const gitBtn = document.querySelector('.git-btn');
    if(gitBtn) {
        gitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            gitBtn.innerHTML = 'Cloning Antimatter...';
            gitBtn.style.backgroundColor = '#10b981'; // Green success color
            gitBtn.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.6)';
            
            setTimeout(() => {
                gitBtn.innerHTML = 'Warning: Local Density Anomaly';
                gitBtn.style.backgroundColor = '#ef4444'; // Red warning
                gitBtn.style.boxShadow = '0 6px 20px rgba(239, 68, 68, 0.6)';
            }, 1500);

            setTimeout(() => {
                gitBtn.innerHTML = `
                    <svg height="24" width="24" viewBox="0 0 16 16" fill="white"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    Try Again
                `;
                gitBtn.style.backgroundColor = 'var(--c-primary)';
                gitBtn.style.boxShadow = '0 4px 14px var(--c-glow)';
            }, 3500);
        });
    }

    // Initialize immediately visible elements
    setTimeout(() => {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if(rect.top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }, 100);
});
