const button_1 = document.querySelector(".button_1");
const button_2 = document.querySelector(".button_2");
const anime = document.querySelector(".anime");

button_1.addEventListener("click", () => {
    anime.classList.add("clicked");
})

button_2.addEventListener("click", () => {
    anime.classList.remove("clicked");
})