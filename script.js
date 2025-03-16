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

    hamburger.addEventListener("click", function() {
        nav.classList.toggle("active");
    });
});