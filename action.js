const card = document.querySelector(".card");
const switchBtns = document.querySelectorAll(".switch-btn");

switchBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        card.classList.toggle("flip");
    });
});
