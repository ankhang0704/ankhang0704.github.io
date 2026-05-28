// 1. Khởi tạo AOS
AOS.init({ duration: 1500, easing: 'ease-out-cubic', once: true, offset: 50 });

// 2. Glassmorphism Header & Back To Top
const navbar = document.getElementById('navbar');
const backToTopBtn = document.getElementById('back-to-top');

let ticking = false;

function updateNavbar() {
    if (window.scrollY > 50) {
        navbar.classList.add('glass-nav', 'py-4');
        navbar.classList.remove('py-6');
    } else {
        navbar.classList.remove('glass-nav', 'py-4');
        navbar.classList.add('py-6');
    }
    
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('show-back-to-top');
    } else {
        backToTopBtn.classList.remove('show-back-to-top');
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

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 3. Xử lý Dark Mode
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}
themeToggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
});

// 4. Xử lý Đổi Ngôn Ngữ
const langToggleBtn = document.getElementById('lang-toggle');
let currentLang = 'vi';
langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'vi' ? 'en' : 'vi';
    langToggleBtn.innerText = currentLang === 'vi' ? 'VI' : 'EN';
    document.querySelectorAll('[data-vi]').forEach(el => {
        el.innerHTML = currentLang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-vi');
    });
});

// ========================================================
// TÍNH NĂNG MỚI CHUẨN QUỐC TẾ
// ========================================================

// 5. ScrollSpy (Làm sáng Menu khi cuộn tới mục tương ứng)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
    root: null,
    rootMargin: '-10% 0px -70% 0px', // Điều chỉnh vùng nhận diện linh hoạt hơn cho mobile
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Xóa active tất cả
            navLinks.forEach(link => link.classList.remove('active'));
            // Thêm active cho thẻ có href = id của section
            const id = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));
