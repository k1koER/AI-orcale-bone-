document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');

    // 預設顯示歡迎頁面
    const welcomeSection = document.querySelector('#welcome');
    if (welcomeSection) {
        welcomeSection.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // 移除所有連結的 active class
            navLinks.forEach(nav => nav.classList.remove('active'));
            // 為被點擊的連結加上 active class
            this.classList.add('active');

            const targetId = this.getAttribute('href');

            // 隱藏所有內容區塊
            contentSections.forEach(section => {
                section.classList.remove('active');
            });

            // 顯示目標內容區塊
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});