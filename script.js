document.addEventListener("DOMContentLoaded", function() {
    // Анимация навигации при прокрутке
    window.addEventListener("scroll", function() {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Обработчик отправки формы
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Ваше сообщение отправлено! Спасибо за обратную связь.");
        form.reset();
    });
});