document.addEventListener('DOMContentLoaded', function() {
    // ナビゲーションメニューのトグル
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    menuToggle.addEventListener('click', function() {
        navUl.classList.toggle('active');
    });

    // スクロール時のヘッダーの動作
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // フェードイン表示
    const fadeElements = document.querySelectorAll('.fade-in');
    const checkFade = function() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', checkFade);
    checkFade();

    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                // ナビゲーションメニューが開いていたら閉じる
                if (navUl.classList.contains('active')) {
                    navUl.classList.remove('active');
                }
            }
        });
    });

    // パーティクルエフェクト
    if (document.getElementById('particles')) {
        particlesJS('particles', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#2563eb' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#2563eb',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }
});
