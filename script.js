/* ================================================
   MOJTABA SAAD PORTFOLIO - COMPLETE JAVASCRIPT
   ================================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide Icons
    lucide.createIcons();
    
    // Initialize all functionality
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initLanguageProgress();
    initContactForm();
    initSmoothScroll();
});

/* ========== NAVBAR SCROLL EFFECT ========== */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
}

/* ========== MOBILE MENU TOGGLE ========== */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });
}

/* ========== SCROLL ANIMATIONS ========== */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        root: null,
        rootMargin: '-50px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Optional: unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/* ========== LANGUAGE PROGRESS BARS ========== */
function initLanguageProgress() {
    const progressBars = document.querySelectorAll('.language-progress');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progress = progressBar.getAttribute('data-progress');
                progressBar.style.setProperty('--progress', progress + '%');
                progressBar.classList.add('animated');
                observer.unobserve(progressBar);
            }
        });
    }, observerOptions);
    
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

/* ========== CONTACT FORM ========== */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const toast = document.getElementById('toast');
    const toastClose = document.getElementById('toastClose');
    
    contactForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending...</span>';
        
        // Simulate form submission (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Reset form
        contactForm.reset();
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Send Message</span><i data-lucide="send"></i>';
        lucide.createIcons(); // Re-initialize icons
        
        // Show toast
        showToast();
    });
    
    // Toast close button
    toastClose.addEventListener('click', hideToast);
    
    function showToast() {
        toast.classList.add('show');
        
        // Auto-hide after 5 seconds
        setTimeout(hideToast, 5000);
    }
    
    function hideToast() {
        toast.classList.remove('show');
    }
}

/* ========== SMOOTH SCROLL ========== */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                event.preventDefault();
                
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ========== ACTIVE NAV LINK ON SCROLL ========== */
function initActiveNavLinks() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink(); // Check initial state
}

// Initialize active nav links
document.addEventListener('DOMContentLoaded', initActiveNavLinks);

/* ========== UTILITY FUNCTIONS ========== */

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

 function openMD() {
    window.open("https://mojtabasaad1999-beep.github.io/CD_Cases/", "_blank"); 
  }

  function openJuice() {
    window.open("https://mojtabasaad1999-beep.github.io/farawla/", "_blank"); 
  }

  function openClinic() {
    window.open("https://mojtabasaad1999-beep.github.io/Dr.Lama/", "_blank"); 
  }

  function openCore() {
    window.open("https://mojtabasaad1999-beep.github.io/Core-Mobile/", "_blank"); 
  }

  function openElectro() {
    window.open("https://mojtabasaad1999-beep.github.io/Saad-Electronics/", "_blank"); 
  }

  function openHand() {
    window.open("https://mojtabasaad1999-beep.github.io/Tobias-Muller/", "_blank"); 
  }

  function openMarket() {
    window.open("https://your-website-link.com", "_blank"); 
  }

  document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    try {
        const response = await fetch("https://my-portfolio-backend-bnco.onrender.com/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("Message sent successfully!");
            this.reset();
        } else {
            alert("Failed to send message");
        }
    } catch (error) {
        console.error(error);
        alert("Server error");
    }
});

