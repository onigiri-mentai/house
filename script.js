//FAQ開閉

document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", function() {
            const answer = this.nextElementSibling;
            const isOpen = answer.style.display === "block";

            // 全て閉じる
            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");

            // クリックしたものだけ開く
            answer.style.display = isOpen ? "none" : "block";
        });
    });
});




//ハンバーガーメニュー開閉

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger-menu");
    const nav = document.querySelector(".main-nav");
    const overlay = document.querySelector(".overlay");

    hamburger.addEventListener("click", function() {
        nav.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    // メニュー内のリンクをクリックしたら閉じる
    const menuLinks = document.querySelectorAll('.main-nav a');

    menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        overlay.classList.remove('active');
    });
    });

    // オーバーレイをクリックしたら閉じる
    overlay.addEventListener("click", function() {
        nav.classList.remove("active");
        overlay.classList.remove("active");
    });
});