// 1. Khởi tạo AOS
AOS.init({ duration: 1500, easing: 'ease-out-cubic', once: true, offset: 50 });

// 2. Glassmorphism Header & Back To Top
const navbar = document.getElementById('navbar');
const backToTopBtn = document.getElementById('back-to-top');

let ticking = false;

function updateNavbar() {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('glass-nav', 'py-4');
            navbar.classList.remove('py-6');
        } else {
            navbar.classList.remove('glass-nav', 'py-4');
            navbar.classList.add('py-6');
        }
    }
    
    if (backToTopBtn) {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show-back-to-top');
        } else {
            backToTopBtn.classList.remove('show-back-to-top');
        }
    }
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateNavbar();
        });
        ticking = true;
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 3. Xử lý Dark Mode
const htmlElement = document.documentElement;

function updateThemeIcons() {
    const sunIcons = document.querySelectorAll('.fa-sun');
    const moonIcons = document.querySelectorAll('.fa-moon');
    
    if (htmlElement.classList.contains('dark')) {
        sunIcons.forEach(icon => icon.classList.remove('hidden'));
        moonIcons.forEach(icon => icon.classList.add('hidden'));
    } else {
        sunIcons.forEach(icon => icon.classList.add('hidden'));
        moonIcons.forEach(icon => icon.classList.remove('hidden'));
    }
}

// Initial check
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}
updateThemeIcons();

// Toggle logic (now supports multiple buttons)
document.addEventListener('click', (e) => {
    if (e.target.closest('#theme-toggle') || e.target.closest('#mobile-theme-toggle')) {
        htmlElement.classList.toggle('dark');
        localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
        updateThemeIcons();
    }
});

// 4. Xử lý Đổi Ngôn Ngữ
let currentLang = localStorage.getItem('lang') || 'en';

function updateLanguageUI() {
    const langLabels = document.querySelectorAll('.lang-label, #lang-toggle, #mobile-lang-toggle');
    langLabels.forEach(el => {
        if (el.querySelector('.lang-label')) {
            el.querySelector('.lang-label').innerText = currentLang.toUpperCase();
        } else {
            el.innerText = currentLang.toUpperCase();
        }
    });

    document.querySelectorAll('[data-vi]').forEach(el => {
        el.innerHTML = currentLang === 'vi' ? el.getAttribute('data-vi') : el.getAttribute('data-en');
    });
    localStorage.setItem('lang', currentLang);
}

// Initial update
updateLanguageUI();

// Toggle logic
document.addEventListener('click', (e) => {
    if (e.target.closest('#lang-toggle') || e.target.closest('#mobile-lang-toggle')) {
        currentLang = currentLang === 'en' ? 'vi' : 'en';
        updateLanguageUI();
    }
});

// 5. Mobile Menu Logic
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const body = document.body;

document.addEventListener('click', (e) => {
    // Open
    if (e.target.closest('#mobile-menu-toggle')) {
        mobileMenu.classList.add('active', 'opacity-100');
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
        body.classList.add('body-lock');
        mobileMenuToggle.classList.add('hidden');
        mobileMenuClose.classList.remove('hidden');
    }
    // Close
    if (e.target.closest('#mobile-menu-close') || e.target.closest('.mobile-nav-link')) {
        mobileMenu.classList.remove('active', 'opacity-100');
        mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        body.classList.remove('body-lock');
        mobileMenuToggle.classList.remove('hidden');
        mobileMenuClose.classList.add('hidden');
    }
});

// ========================================================
// TÍNH NĂNG MỚI CHUẨN QUỐC TẾ
// ========================================================

// 5. ScrollSpy (Làm sáng Menu khi cuộn tới mục tương ứng)
const sections = document.querySelectorAll('section[id]'); // Only observe sections with IDs
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
    root: null,
    rootMargin: '-10% 0px -70% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
            
            if (activeLink) {
                // Only clear and set if we found a matching hash link on this page
                document.querySelectorAll('.nav-link[href^="#"]').forEach(link => link.classList.remove('active'));
                activeLink.classList.add('active');
            }
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// 6. Highlight current page link (for static pages like Privacy/Terms)
function highlightCurrentPage() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
}
highlightCurrentPage();
